import {Link} from 'react-router-dom'


export default function Footer (){
  return (
    <div>
      <footer className="bg-black">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <span className="block w-32 h-10 bg-gray-200 rounded-lg"></span>

          <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75"to="">
                  {" "}
                  About{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Meet the Team{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  History{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Careers{" "}
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Services</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" to="">
                  {" "}
                  1on1 Coaching{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Company Review{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Accounts Review{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  HR Consulting{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  SEO Optimisation{" "}
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Helpful Links</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Contact{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  FAQs{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Live Chat{" "}
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Legal</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Privacy Policy{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Terms & Conditions{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Returns Policy{" "}
                </Link>
                <Link className="hover:opacity-75" to="">
                  {" "}
                  Accessibility{" "}
                </Link>
              </nav>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-100 sm:items-center sm:justify-between sm:flex">
            <p className="text-xs text-gray-500">&copy; 2022 Company Name</p>

            <strong className="inline-flex items-center p-2 space-x-2 text-sm font-medium border border-gray-200 rounded">
              <span> Status: </span>

              <span className="w-3 h-3 bg-green-600 rounded-full"></span>

              <span className="font-medium text-green-600">
                All systems operational
              </span>
            </strong>
          </div>
        </div>
      </footer>
    </div>
  );
};
