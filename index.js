
import InfoBlock from "../components/InfoBlock";

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🔥 Участки у реки Мста – Белая Гора</h1>
      <p><strong>Коттеджный посёлок «Белогорье»</strong></p>
      <ul>
        <li>5 участков: 1×11 соток и 4×8.5 соток</li>
        <li>Общая площадь — 45 соток</li>
        <li>Цена за весь блок — 1 050 000 ₽</li>
        <li>Отдельно — 250 000 ₽ за участок</li>
        <li>Срочная продажа до 5 июля!</li>
      </ul>
      <InfoBlock />
    </main>
  );
}
