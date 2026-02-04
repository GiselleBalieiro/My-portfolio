import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Olá! Tirarei suas dúvidas sobre a Giselle.", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
        setInput("");
        setLoading(true);

        try {
            const apiUrl = import.meta.env.DEV
                ? "/api/perguntar"
                : "https://ia-rag-api-production.up.railway.app/perguntar";

            const res = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ pergunta: userMessage, id: 42 }),
            });

            if (!res.ok) throw new Error("Erro na resposta da API");

            const data = await res.json();

            const botReply = data.resposta || data.message || JSON.stringify(data);

            setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
        } catch (error) {
            console.error("Erro no chat:", error);
            setMessages((prev) => [
                ...prev,
                { text: "Desculpe, ocorreu um erro ao processar sua mensagem.", sender: "bot" },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="z-50 flex flex-col items-end pointer-events-none fixed inset-0 justify-end p-6">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="pointer-events-auto mb-16 w-80 sm:w-96 h-[500px] bg-bg-secondary border border-border-primary rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        >
                            <div className="bg-bg-tertiary p-4 flex justify-between items-center border-b border-border-primary">
                                <span className="font-semibold text-primary">GB Assistant - AI </span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-secondary hover:text-primary transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg-primary">
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                                ? "bg-brand-indigo text-white rounded-br-none"
                                                : "bg-bg-tertiary text-primary border border-border-primary rounded-bl-none"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {loading && (
                                    <div className="flex justify-start">
                                        <div className="bg-bg-tertiary p-3 rounded-2xl rounded-bl-none border border-border-primary">
                                            <Loader2 size={16} className="animate-spin text-secondary" />
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="p-3 bg-bg-secondary border-t border-border-primary flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Digite sua pergunta..."
                                    className="flex-1 bg-bg-tertiary text-primary placeholder-secondary border border-border-primary rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={loading || !input.trim()}
                                    className="bg-brand-indigo text-white p-2 rounded-xl hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="pointer-events-auto fixed bottom-4 right-4 z-50 w-[60px] h-[60px] rounded-4xl shadow-lg backdrop-blur-md bg-[--bg-primary]/80 border border-border-primary text-brand-indigo hover:bg-opacity-90 transition-all flex items-center justify-center"
                >
                    {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                </motion.button>
            </div>
        </>
    );
};

export default LiveChat;
