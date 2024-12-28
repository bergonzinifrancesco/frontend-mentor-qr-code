
export default function Home() {
  return (
    <div class="bg-white w-[320px] h-[500px] p-[16px] pb-[40px] rounded-[20px] shadow-lg" role="region">
      <img src="/image-qr-code.png" alt="Qr code" class="w-[288px] aspect-square static mb-[24px] rounded-[10px]"/>
      <div class="flex flex-col gap-[16px] h-[131px] px-[16px]">
        <h1 class="font-bold text-center text-slate-900 text-xl leading-[1.2] h-[52px]">Improve your front-end skills by building projects</h1>
        <p class="font-sans text-slate-500 text-center tracking-[.02px] leading-[1.4] h-[63px]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}
