import Image from "next/image";

const test = () => {
  return (
    <section className="bg-white drop-shadow-[0_10px_90px_rgba(0,0,0,0.20)]">
      <img
        className="rounded-full max-w-20 max-h-20"
        src={
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Imagen del betoven"
        width={1000}
        height={1000}
      ></img>
      <h2 className="text-black">TITULO DE LA CANCIONCITA</h2>
      <p className="text-black">Autor del betoven</p>
    </section>
  );
};

export default test;
