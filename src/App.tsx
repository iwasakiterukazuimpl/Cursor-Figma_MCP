import React, { useState } from 'react';
import './App.css';

export default function Top() {
  const [message, setMessage] = useState('');
  const [sendStatus, setSendStatus] = useState('送信');

  const handleSend = () => {
    if (message.trim()) {
      setSendStatus('送信中...');
      
      // Simulate API call
      setTimeout(() => {
        console.log('送信されたメッセージ:', message);
        setSendStatus('送信完了!');
        
        setTimeout(() => {
          setSendStatus('送信');
          setMessage('');
        }, 1000);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="bg-[#ffffff] relative size-full" data-name="TOP" id="node-1_2">
      <div className="absolute h-[932px] left-0 top-0 w-[430px]" id="node-14_3" />
      
      <div
        className="absolute font-['Noto_Sans_JP:Bold',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[45px] text-left text-nowrap top-72"
        id="node-14_6"
        style={{ left: "calc(50% - 165px)" }}
      >
        <p className="block leading-[normal] whitespace-pre">SUSHI-SAY neo</p>
      </div>
      
      <div
        className="absolute font-['Noto_Sans_JP:Bold',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[24px] text-left text-nowrap top-[249px]"
        id="node-14_4"
        style={{ left: "calc(50% - 108px)" }}
      >
        <p className="block leading-[normal] whitespace-pre">ひとことネタアプリ</p>
      </div>
      
      <div
        className="absolute bg-gradient-to-r from-[#ffe4e4] h-[54px] left-[50px] rounded-[30px] to-[#f9eedd] top-[439px] w-[329px]"
        id="node-14_7"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#d83939] border-[3px] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[5px_5px_4px_0px_rgba(255,255,255,0.25)]"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="メッセージを入力..."
          className="absolute inset-0 bg-transparent border-none rounded-[30px] px-5 font-['Noto_Sans_JP',_sans-serif] text-base text-[#333] outline-none placeholder-[#666]"
        />
      </div>
      
      <div
        className="absolute bg-gradient-to-r from-[#ffe4e3] h-[54px] left-[168px] rounded-[30px] to-[#faeede] top-[538px] w-[94px] cursor-pointer transition-transform hover:scale-105"
        id="node-17_8"
        onClick={handleSend}
      >
        <div
          aria-hidden="true"
          className="absolute border-[#d83939] border-[3px] border-solid inset-0 pointer-events-none rounded-[30px]"
        />
        <div
          className="absolute font-['Noto_Sans_JP:Bold',_sans-serif] leading-[0] not-italic text-[#d83939] text-[24px] text-left text-nowrap top-[550px]"
          id="node-17_9"
          style={{ left: "calc(50% - 24px)" }}
        >
          <p className="block leading-[normal] whitespace-pre">{sendStatus}</p>
        </div>
      </div>
    </div>
  );
}
