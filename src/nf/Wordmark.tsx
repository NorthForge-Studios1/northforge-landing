// El nombre como monumento: ocupa todo el ancho, sin importar la pantalla.
export function Wordmark({ id }: { id: string }) {
  return (
    <div className="nf-name">
      <svg viewBox="0 0 1000 152" role="img" aria-labelledby={id}>
        <title id={id}>NorthForge</title>
        <text x="0" y="146" fontSize="196" textLength="1000" lengthAdjust="spacingAndGlyphs">NORTHFORGE</text>
      </svg>
    </div>
  );
}
