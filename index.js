import { useState } from 'react';
import Button from '../components/button';
import Input from '../components/input';

export default function Home() {
  const [proveedor, setProveedor] = useState("");
  const [articulo, setArticulo] = useState("");
  const [uso, setUso] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  // Función para clasificar el proveedor según el uso y tipo de artículo
  const handleSubmit = () => {
    setError("");
    
    if (!proveedor || !articulo || !uso) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    
    // Lógica para la clasificación A a G2 y validación de GMP
    let clasificacion = "";
    let justificacion = "";
    
    // Lógica de clasificación A a G2
    if (uso === "medico" || uso === "cuarto limpio") {
      clasificacion = "A";
      justificacion = "Cumple con todos los requisitos establecidos en la normativa de Buenas Prácticas de Manufactura (GMP).";
    } else if (articulo === "material crítico") {
      clasificacion = "B";
      justificacion = "Cumple con los requisitos para materiales críticos, se encuentra dentro de los parámetros de GMP.";
    } else if (articulo === "material no crítico") {
      clasificacion = "C";
      justificacion = "No es un artículo crítico, pero cumple con requisitos básicos para ser clasificado como GMP.";
    } else if (proveedor === "proveedor externo") {
      clasificacion = "D";
      justificacion = "Proveedor externo sin requisitos establecidos para cumplir con GMP.";
    } else if (proveedor === "proveedor interno") {
      clasificacion = "E";
      justificacion = "Proveedor interno sin proceso de validación GMP.";
    } else {
      clasificacion = "G2";
      justificacion = "Proveedor no cumple con los requisitos básicos establecidos para GMP.";
    }

    // Mostrar el resultado con clasificación y justificación
    setResultado({ clasificacion, justificacion });
  };

  return (
    <div>
      <h1>Bienvenido a la aplicación de clasificación de proveedores</h1>
      <Input value={proveedor} onChange={(e) => setProveedor(e.target.value)} placeholder="Proveedor" />
      <Input value={articulo} onChange={(e) => setArticulo(e.target.value)} placeholder="Artículo" />
      <Input value={uso} onChange={(e) => setUso(e.target.value)} placeholder="Uso" />
      <Button onClick={handleSubmit}>Clasificar</Button>
      {error && <div style={{ color
