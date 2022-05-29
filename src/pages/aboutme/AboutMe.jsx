import { Link } from "react-router-dom";
import me from "../../assets/me.png";

export default function AboutMe() {
  return (
    <div>
      <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden ">
        <div className="flex relative z-20 items-center">
          <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col">
            <input type="image" src={me} alt="awatar" className="rounded-full w-48 mx-auto" />
              <div className="flex justify-center py-12 space-x-6">
                <Link
                  className="text-pink-500 hover:text-opacity-75"
                  to="aboutme"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
                </Link>

                <Link
                  className="text-gray-900 hover:text-opacity-75"
                  to="aboutme"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>

                <Link
                  className="text-red-600 hover:text-opacity-75"
                  to='aboutme'
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </Link>
                <Link
                  className="text-indigo-600 hover:text-opacity-75"
                 to="aboutme"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitch"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                   <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fill-rule="evenodd" clipRule="evenodd"/>
              </svg>
                </Link>
                <Link
                  className="text-sky-600 hover:text-opacity-75"
                  to={{ pathname: "https:/www.instagram.com/patrycjaio" }} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                 <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </Link>
              </div>


             
              <p className="text-3xl my-6 text-center dark:text-white">
                Hi, I&#x27;m Patrycja 🤘
              </p>
             
            
          
              <h2 className="max-w-3xl text-5xl md:text-2xl  mx-auto dark:text-white text-gray-800 text-center py-2">
                I am software developer and UX/UI designer. <br />
                <br />
                I am as well  former journalist who was passionate about coding
                so I changed my career. You will ask that coding is not
                connected to being a journalist? Yes it is. World changed and
                everything is about the internet.
                <br />
                <br />
                My pasion to content creation morphed to bloging about sofware
                developement. Hence I am sure that you could find my Instagram
                reels and Youtube useful and informative.
                <br /> <br />I am here to help you to change your career like I
                did. And to bring you the most free resources that I
                could find wraped up in one place - my website.
              </h2>
         
                 
            </div>
          </div>
        </div>
      </main>
      <div className=" font-mono py-16 bg-gradient-to-t  to-white from-indigo-600">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold  text-black text-center">
                  Javascript Games
                </h3>
                <p className="mb-6 text-mb">
                  Make coding fun! Learn with me how to code games in pure
                  Javascript!
                </p>
                <Link to="aboutme" className="block font-medium text-center text-orange-500">
                  Know more
                </Link>
              </div>
              <input type="image" 
                src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg"
                className="w-2/3 ml-auto -mb-12"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black text-center">Youtube</h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <Link to="aboutme" className="block font-medium text-orange-600 text-center">
                  Know more
                </Link>
              </div>
              <input type="image" 
                src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
                className="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black text-center">GitHub</h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <Link to="aboutme" className="block font-medium text-orange-500 text-center">
                  Know more
                </Link>
              </div>
              <input type="image" 
                src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg"
                className="w-2/3 ml-auto "
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
