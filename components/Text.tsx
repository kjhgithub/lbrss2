import Link from "next/link";

function Text() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <span>BA &#127992;</span>
        <span>SQ &#9899;</span>
        <span>TE &#127934;</span>
      </div>
      <span className="italic text-center mb-4">
        Richtig besaitet. <br /> Ansonsten ist wieder der Schläger schuld.
        {/* String it right. Otherwise, it's the racket's fault. Again. */}
      </span>
      <span className="text-center text-sm md:text-base">
        Erfahrener Besaiter, langjähriger Racketsportler.
      </span>
      <span className="text-center text-sm md:text-base">
        Geboren in England, in Deutschland angekommen.
      </span>
      {/* 
      <span className="text-center text-xs">
        Erfahrener Schlägerbesaiter, langjähriger Schlägersport-Fan.
      </span>
      <span className="text-center text-xs">
        Ursprünglich aus England, nun in Deutschland angekommen.
      </span> */}
      {/*       <span className="text-center">
        Experienced racket stringer and lifelong racket sports fanatic
      </span> */}
      <span className="text-center mt-6">
        <Link
          href="https://maps.app.goo.gl/jvfB8CbAiWQmm1JG9?g_st=ic"
          target="_blank"
          className="hover:underline"
        >
          &#128205; Köln, Deutschland
        </Link>
      </span>
    </section>
  );
}

export default Text;
