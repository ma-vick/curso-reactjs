export default function SeuNome({ setNome }) {
  return (
    <div>
        <p>digite seu nome:</p>
        <input type="text" onChange={(e) => setNome(e.target.value)} />
    </div>
  )
}
