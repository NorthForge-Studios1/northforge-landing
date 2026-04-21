import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Upload, Activity, Shield, Terminal } from 'lucide-react';

// Interfaces for our game state
interface GameState {
  ascii_art: string;
  narrativa: string;
  desafio: string;
  opciones: string[];
  hp_actual: number;
  xp_ganada: number;
  finalizado: boolean;
}

const TypingEffect = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, 20); // ms per character

    return () => clearInterval(intervalId);
  }, [text, onComplete]);

  return <span>{displayedText}</span>;
};

const LabsForgeSim = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [documentUri, setDocumentUri] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await axios.post(`${apiUrl}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setDocumentUri(response.data.document_uri);
      setGameState(response.data.state);
      setTypingComplete(false);
    } catch (err: unknown) {
      console.error(err);
      setError(
        (axios.isAxiosError(err) && err.response?.data?.detail)
          ? err.response.data.detail
          : "Error al iniciar la simulación."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleAction = async (optionIndex: number) => {
    if (!gameState || !documentUri) return;

    // Convert option index to A, B, C
    const optionLetter = String.fromCharCode(65 + optionIndex);

    setIsLoading(true);
    setError(null);
    setTypingComplete(false); // Reset typing for new response

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await axios.post(`${apiUrl}/api/game_action`, {
        document_uri: documentUri,
        user_action: `Opción ${optionLetter}`,
        current_hp: gameState.hp_actual,
        current_xp: gameState.xp_ganada,
      });

      setGameState(response.data);
    } catch (err: unknown) {
      console.error(err);
      setError(
        (axios.isAxiosError(err) && err.response?.data?.detail)
          ? err.response.data.detail
          : "Error al procesar la acción."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-slate-950 text-green-400 font-mono relative overflow-hidden">
      {/* Background Cyberpunk Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0zOXYzOEgyVjFoMzd6IiBmaWxsPSJyZ2JhKDIwLCAyNTUsIDIwLCAwLjAzKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] -z-10 opacity-50"></div>

      <div className="w-full max-w-4xl border border-green-500/30 bg-black/80 rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.1)] p-6 relative backdrop-blur-sm">

        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b border-green-500/50 pb-4 mb-6">
          <div className="flex items-center gap-2 text-green-500">
            <Terminal size={20} />
            <h1 className="text-xl font-bold tracking-widest uppercase">Forge-Sim Terminal</h1>
          </div>

          {gameState && (
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-red-500" />
                <span className="text-red-400">HP: {gameState.hp_actual}</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-blue-500" />
                <span className="text-blue-400">XP: {gameState.xp_ganada}</span>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 border border-red-500 bg-red-950/50 text-red-400 rounded-sm">
            <span className="animate-pulse">ERROR: </span>{error}
          </div>
        )}

        {/* Upload State */}
        {!documentUri && !isUploading && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="mb-8 text-green-500/80 max-w-lg">
              INICIALIZANDO SIMULADOR... SE REQUIERE MATERIAL DE ENTRENAMIENTO (PDF) PARA CONFIGURAR EL ENTORNO DE PRUEBAS.
            </p>

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            <div className="flex flex-col gap-4 items-center">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors uppercase tracking-widest font-bold flex items-center gap-2"
              >
                <Upload size={18} />
                {file ? file.name : "SELECCIONAR DATOS (PDF)"}
              </button>

              {file && (
                <button
                  onClick={handleUpload}
                  className="px-6 py-3 bg-green-600 text-black font-bold hover:bg-green-500 transition-colors uppercase tracking-widest"
                >
                  INICIAR SECUENCIA
                </button>
              )}
            </div>
          </div>
        )}

        {isUploading && (
          <div className="py-20 text-center animate-pulse text-green-500">
            PROCESANDO DATOS EN NÚCLEO CUÁNTICO... POR FAVOR ESPERE.
          </div>
        )}

        {/* Game State (Terminal Output) */}
        {gameState && !isUploading && (
          <div className="space-y-6">

            {/* ASCII Art with green glow */}
            {gameState.ascii_art && (
              <div className="flex justify-center mb-6">
                <pre className="text-green-500 text-[10px] sm:text-xs leading-[10px] sm:leading-3 whitespace-pre font-mono drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] overflow-x-auto max-w-full">
                  {gameState.ascii_art}
                </pre>
              </div>
            )}

            {/* Narrative with Typing Effect */}
            <div className="text-green-400/90 leading-relaxed min-h-[100px]">
              {isLoading ? (
                <span className="animate-pulse">Calculando siguiente estado...</span>
              ) : (
                <>
                  <p className="mb-4">
                    {'> '}
                    <TypingEffect text={gameState.narrativa} onComplete={() => setTypingComplete(true)} />
                  </p>

                  {typingComplete && (
                    <div className="mt-6 border-l-2 border-green-500 pl-4 py-2 bg-green-950/20">
                      <p className="font-bold text-green-300">
                        {'> DESAFÍO: '}
                        <TypingEffect text={gameState.desafio} />
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Options */}
            {typingComplete && !isLoading && !gameState.finalizado && (
              <div className="mt-8 grid gap-4 pt-4 border-t border-green-500/30">
                {gameState.opciones.map((opcion, index) => (
                  <button
                    key={index}
                    onClick={() => handleAction(index)}
                    className="text-left px-4 py-3 border border-green-700/50 hover:border-green-400 hover:bg-green-900/30 transition-all text-sm group flex items-start gap-3"
                  >
                    <span className="text-green-500 font-bold group-hover:text-green-300">
                      [{String.fromCharCode(65 + index)}]
                    </span>
                    <span className="text-green-400/80 group-hover:text-green-300">
                      {opcion.replace(/^[A-Z]:\s*/, '')}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {gameState.finalizado && (
              <div className="mt-8 text-center p-6 border border-brand-purple/50 bg-brand-purple/10">
                <h2 className="text-2xl font-bold text-brand-purple animate-pulse mb-2">SIMULACIÓN COMPLETADA</h2>
                <p className="text-green-400">Score Final: {gameState.xp_ganada} XP | HP Restante: {gameState.hp_actual}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 px-6 py-2 border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-colors"
                >
                  REINICIAR SISTEMA
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LabsForgeSim;
