
import React, { useRef, useState, useEffect } from 'react';
import { Camera, RefreshCw, Download, Share2, AlertCircle } from 'lucide-react';

export const TryOn: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [activeItem, setActiveItem] = useState<string>('earring');
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCamera = async () => {
    try {
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setIsCameraOn(true);
    } catch (err) {
      console.error("Camera error:", err);
      setError("Impossible d'accéder à votre caméra. Veuillez vérifier les permissions.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsCameraOn(false);
    }
  };

  useEffect(() => {
    return () => stopCamera();
  }, [stream]);

  const items = [
    { id: 'earring', name: 'Boucles Royale', icon: '💎' },
    { id: 'necklace', name: 'Collier Or 18K', icon: '📿' },
    { id: 'tiara', name: 'Diadème Bridal', icon: '👑' },
  ];

  return (
    <div className="min-h-screen bg-black pt-10 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif gold-text mb-4">Essai Virtuel AR</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Visualisez nos pièces exclusives directement sur vous grâce à notre technologie de réalité augmentée simplifiée.
          </p>
        </div>

        <div className="relative aspect-[9/16] md:aspect-video bg-[#111] border-2 border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl">
          {!isCameraOn ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                <Camera size={40} className="text-[#D4AF37]" />
              </div>
              {error && (
                <div className="flex items-center space-x-2 text-red-500 bg-red-500/10 px-4 py-2 rounded">
                  <AlertCircle size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{error}</span>
                </div>
              )}
              <button 
                onClick={startCamera}
                className="bg-[#D4AF37] text-black px-8 py-3 font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Activer la Caméra
              </button>
            </div>
          ) : (
            <>
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                className="w-full h-full object-cover scale-x-[-1]"
              />
              
              {/* Overlay Jewelry Mockups */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {activeItem === 'earring' && (
                  <div className="relative w-full h-full">
                    {/* Left Earring */}
                    <div className="absolute top-[40%] left-[25%] animate-pulse">
                      <div className="text-4xl drop-shadow-lg">💎</div>
                    </div>
                    {/* Right Earring */}
                    <div className="absolute top-[40%] right-[25%] animate-pulse">
                      <div className="text-4xl drop-shadow-lg">💎</div>
                    </div>
                  </div>
                )}
                {activeItem === 'necklace' && (
                  <div className="absolute top-[65%] left-1/2 -translate-x-1/2 opacity-80 animate-bounce">
                    <div className="text-7xl drop-shadow-2xl">📿</div>
                  </div>
                )}
                {activeItem === 'tiara' && (
                  <div className="absolute top-[20%] left-1/2 -translate-x-1/2 opacity-90">
                    <div className="text-8xl drop-shadow-2xl">👑</div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4">
                <button className="bg-black/60 p-3 rounded-full hover:bg-black transition-colors backdrop-blur-md border border-white/20">
                  <RefreshCw size={20} />
                </button>
                <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl">
                  Capturer
                </button>
                <button 
                  onClick={stopCamera}
                  className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors border border-white/20"
                >
                  <RefreshCw size={20} className="rotate-45" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Item Selection */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`p-4 border-2 transition-all flex flex-col items-center space-y-2 ${
                activeItem === item.id 
                  ? 'border-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'border-gray-900 bg-[#0a0a0a] hover:border-gray-700'
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between p-6 bg-[#0a0a0a] border border-gray-900">
           <div className="flex items-center space-x-4">
             <div className="w-12 h-12 bg-[#111] flex items-center justify-center">
               <Share2 size={18} className="text-[#D4AF37]" />
             </div>
             <div>
               <p className="text-xs font-bold uppercase tracking-widest">Partager le look</p>
               <p className="text-[10px] text-gray-500">Envoyez à vos amis pour avis</p>
             </div>
           </div>
           <button className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest border border-[#D4AF37] px-4 py-2 hover:bg-[#D4AF37] hover:text-black transition-all">
             Copier le Lien
           </button>
        </div>
      </div>
    </div>
  );
};
