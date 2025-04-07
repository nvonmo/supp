
import { useState } from 'react';
import Button from '../components/button';
import Input from '../components/input';

export default function Home() {
  const [proveedor, setProveedor] = useState("");
  const [articulo, setArticulo] = useState("");
  const [uso, setUso] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    if (!proveedor || !articulo || !uso) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (uso === "medico") {
      setResultado({ clasificacion: "GMP", justificacion: "Cumple con los requisitos de Buenas Prácticas de Manufactura." });
    } else {
      setResultado({ clasificacion: "No GMP", justificacion: "No cumple con los requisitos establecidos." });
    }
  };

  return (
    <div>
      <h1>Bienvenido a la aplicación de clasificación de proveedores</h1>
      <Input value={proveedor} onChange={(e) => setProveedor(e.target.value)} placeholder="Proveedor" />
      <Input value={articulo} onChange={(e) => setArticulo(e.target.value)} placeholder="Artículo" />
      <Input value={uso} onChange={(e) => setUso(e.target.value)} placeholder="Uso" />
      <Button onClick={handleSubmit}>Clasificar</Button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {resultado && (
        <div>
          <h3>Resultado de Clasificación:</h3>
          <p><strong>Clasificación:</strong> {resultado.clasificacion}</p>
          <p><strong>Justificación:</strong> {resultado.justificacion}</p>
        </div>
      )}
    </div>
  );
}
    