const NotFoundPage = () => {
  return (
    <section className="bg-white h-[60vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-[200px] lg:w-[300px] object-contain animate-pulse"
          src="/images/pay4meicon.png"
          alt="pay4meicon"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-8">
          PAGE NOT FOUND!!
        </h2>
      </div>
    </section>
  );
};

export default NotFoundPage;
