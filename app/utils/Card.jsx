
const Card = ({title, body}) => { 
    return (
      <a
        href="../chats"
        className="w-full h-[6rem] rounded-xl border border-transparent mx-8 bg-[#5B6A73] p-2  hover:border-white hover:shadow-2xl  hover:bg-[#5B6A73]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-2 md:text-2xl text-xl font-semibold`}>{title}</h2>
        <p className={`m-0 text-sm opacity-80 text-balance`}>{body}</p>
      </a>
    );
}

export default Card;