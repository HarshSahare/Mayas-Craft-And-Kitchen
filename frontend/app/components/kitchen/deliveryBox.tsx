import { DeliveryIcon } from "@solar-icons/react/outline";

const DeliveryBox = () => {
  return (
    <div className="flex w-full font-dm items-center gap-5 rounded-[15px] border border-[#A6532E] px-5 py-4">
      {/* Icon */}
      <div
        className="shrink-0 text-[#A6532E]"
        dangerouslySetInnerHTML={{ __html: icon }}
      ></div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[14px] font-bold leading-tight text-[#8F4925]">
          One Day Delivery
        </h3>

        <p className="text-[10px] leading-[1.3] font-medium text-[#2F2F30]">
          Free Delivery & we will deliver your order within 24 hours right at
          your doorstep
        </p>
      </div>
    </div>
  );
};

const icon = `
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="42" height="42" fill="url(#pattern0_1341_457)"/>
<defs>
<pattern id="pattern0_1341_457" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1341_457" transform="scale(0.0104167)"/>
</pattern>
<image id="image0_1341_457" width="96" height="96" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFdklEQVR4nO2bSYgkRRSG0wUUt4Mi2G4tk+9Vt6OOgruCfXCsfFHdDgoqXhQvol704kERpkW9aHe+6KJbRC9uKCLKHMSLjsuIDgoeWlxxcLto0+LejrstUbZMz2JlZkRURlTX+yBuRdT/3p8ZL19GZJIIgiAIgiAIgiAIgiAIgiAIgiAIgiAIwoDRJjhIZ3gzE7ypFSxphctlRmjda4J8HI/TCubLJl0M8H3lWyZfDPCAWXZsk29lgMufrcUrRCt4SwwICCv4SQwIiBgQGCZ8QwzwSPTxRS/Qkejji16gI9HHF71AR6KPz/eEa90AJry1VoGh53OlB1f5e7UKDD2fK71YZliNnFWbwNDzRWkAwWxtAkPPFwKt8P7uccA35q2prz8TA/Ygb+I5Je6CKxIfiAF7Mze2/jBN8HV3A/C5xAdiwN4wwd3FtQD+4Gx0KHFFDNjnduRSbT2BGLA7rODhMsn31hOIAbvIm3i6Jvyr1p5ADNgFE75QJfleeoKqfxjbSDzBGY7baXDsCUInUEdgwNNXJgcw4bu2Gpx6gtAJ1BEYoDO8wUWDU08w6AbMdZou/MpNh0NPMOgGcKmmq4c9wSAbkFdounrWEwyyAVrBIz61WPUEg2pAbtF01bpPUDoQwqvrTDgT/jw5NnZgiKYrpguow3SzMep6lE9bjFyNnOaiOydshU68swHLSbIfK3wliPAMr3NpukzB7HsDuJVeE0o0O6y1rODG0El3NmBybPhgreDLYAYo3G6j+95NI4cz4ULfG6AVXh9SNFsWYlZwT+iEOxuwsva/H1p4XrEQtwmON8b1vQHt8fTM0KK1RSFmgkeDa/ZhgCa8I7RoXbEQ96LpKh4ezw6thhVsjcIAVb4Qh9LMCt7hVnrV5GSyvzcDtMIdoZOvzSDcWaYQzyiYCK8VXm8TpF4MCNH5astCbAyK4YHBDCb8tt1KL3A2QBP8GDoYXbIQu+50+R+wpFt4kZMBrODZ8IFgYSGOsenqaFa4ONU6adjagGk12mDC72IvxBxh07VqvGr6KWsTtMJrIwhi2SyH/dR0rR7mNb61AUywpURyfuucs8/S883G94MTQ4eYHSOtYCr25Ohy5jvGB/N2yc9Gh4qaGrP2dtueW9lH+DR4Ei2Hr/hygvMqG6AJbioQ92eZidsE682zfB8m3198hHdZGICPdRWo8PHScynkvjPAZ3yEL1c2gAnf7jap6Tx9fgqkIxs+42PCLyoboAk+7zZplZZ7zpxKiyCpVYbX+Ah3VjaACT/uNmneTKHsXG2CI0IntOrwGR8r/MHCANjW/baCS8vOpVt4buiEVh0+42MFH1U3QMGTBbfVE+XnQt09WHwmie0bYZ/xKdjq/VSBeUwr89aPs/QUrfCXAoG3JJEdNPMZnybYXFng7MaRY1nh3wUiF8wTQLdnZFbwWdHtbn6X1Mx9reFjzHHzOuKbocYGK5Hm+bVwrVTwuyZ8gFXjQlOMpi7ZcKgRzQR5qQaMLJ6RPcEET/U8PpcvLM0tWHQX1Pm87ZtOInscn87STU4iTYHslTgm2OItm9bxwUM9jG+bs8DZi0eP0gSfeBencNGsw0lgzLJSZh2vnnxcmG6mJ3gRaSq9aSY8CvzenDtKIsFsPrl/P7bbxfWrl33h1ZhK7uNKYYWLpqAlkTEzvu5U887Gx5XvPfn/0SY4mhU8by2Q4CXzeJtESt5cf2SpTaj/HfDazMS6E3sulDPcWPS2dA9h8znh5U77ozWiszQz+9Dlr3r4QKvGZfULbeHJWuHt5jMgcy7H1ImVbbodnY86CDbPUOPsfkn8vo46MsFtWsGL5n3Ov2elzNeW8KG5m7XCO3ULzwitUxAEQRAEQRCEJEr+ARK4w588r7oyAAAAAElFTkSuQmCC"/>
</defs>
</svg>
`;

export default DeliveryBox;
