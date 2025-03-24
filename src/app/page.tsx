import Background from "@/components/Background";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div>
      <div id="container">
        <Section
          id="s1"
          title="¿AÚN NO SABES QUE ES?"
          content='Es una historia de aventuras y amistad'
        />
        <Section
          id="s2"
          title="¡CUIDADO CON LA HIERBA!"
          content="El peligro se esconde..."
        />
        <Section
          id="s3"
          title="¡CAPTURALOS A TODOS!"
          content="¡Atrapa a todos!"
        />
      </div>
      <Background />
    </div>
  );
}
