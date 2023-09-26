const Home = () => {
  return (
    <div className = "w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <section className="fixed w-72 flex flex-col h-screen">
          left sidebar
        </section>
        <main>Home timeline</main>
        <section>right sidebar</section>
      </div>
    </div>
  )
}

export default Home