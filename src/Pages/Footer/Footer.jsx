import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';



const Footer = () => {
  return (
    <div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex w-32 h-auto items-center"
            >
              <img src="https://i.ibb.co/LPvfCjz/SPORTS-TOY-SHOP-2-removebg.png" alt="" />
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm ">
              About pages are personal to you and your company, so the structure of your about page will vary based on what you want to highlight. However, you’ll start with the same writing process.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold uppercase tracking-wide ">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                01710090697
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 ">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                taherul2317@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 ">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Phultola,Khulna,Bangladesh
              </a>
            </div>
          </div>
          <div>
            <span className="text-base uppercase font-bold tracking-wide ">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://twitter.com/"
                className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <TwitterIcon color='warning'></TwitterIcon>
              </a>
              <a
                href="/https://www.instagram.com/"
                className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
               <InstagramIcon color='warning'></InstagramIcon>
              </a>
              <a
                href="/https://web.facebook.com/"
                className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FacebookIcon color='warning'></FacebookIcon>
              </a>
            </div>
           
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright <b className="uppercase text-green-400">Sport Toy</b>. All rights reserved.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
