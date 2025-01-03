import link from "next/link"

const Footer = () => {
    return (
      <footer className="bg-secondary text-secondary-content">
          <div className='max-w-7xl mx-auto px-2 py-12 sm:px-6 lg:px-8'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <h3 className="text-lg font-bold mb-4">Transport for Buryland Authority</h3>
              </div>
              <div className="text-sm mt-8">
                  <p>
                      Disclaimer: Transport for Buryland Authority is a role-play for Minecraft Server. We're not related to any real-life things.
                  </p>
                  <br/>
                  <p>
                      &copy; {new Date().getFullYear()} CityRail by KONNO. All rights reserved.
                  </p>
              </div>
          </div>
      </footer>
    );
}

export default Footer;