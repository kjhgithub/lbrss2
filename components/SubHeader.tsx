function SubHeader() {
  return (
    <section className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-4">
        <span>BA &#127992;</span>
        <span>SQ &#9899;</span>
        <span>TE &#127934;</span>
      </div>
      <span className="italic text-center">
        Richtig besaitet. Ansonsten ist wieder der Schläger schuld.
        {/* String it right. Otherwise, it's the racket's fault. Again. */}
      </span>
    </section>
  );
}

export default SubHeader;
