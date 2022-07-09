export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          align-items: center;
          background: #082032;
          border-radius: 9999px;
          border: 0;
          color: #fff;
          cursor: pointer;
          display: flex;
          font-size: 11px;
          font-weight: 700;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
          margin-top: 20px;
        }
        button > :global(svg) {
          margin-right: 8px;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
