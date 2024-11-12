function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10 mt-[90px]">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Rīgas Musicas Skola</h2>
                    <p className="text-gray-400">123 Music Lane, Riga, Latvia</p>
                    <p className="text-gray-400">Phone: +371 123 456 789</p>
                    <p className="text-gray-400">Email: info@rigasmusicskola.lv</p>
                </div>

 
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-indigo-400">Home</a></li>
                        <li><a href="courses" className="hover:text-indigo-400">Courses</a></li>
                        <li><a href="about" className="hover:text-indigo-400">About Us</a></li>
                    </ul>
                </div>

         
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" className="text-gray-400 hover:text-indigo-400">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://www.instagram.com/" className="text-gray-400 hover:text-indigo-400">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="https://x.com/?lang=eng" className="text-gray-400 hover:text-indigo-400">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                    </div>
                </div>

    
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">Sign up for updates and new courses.</p>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 rounded bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-10">
                © {new Date().getFullYear()} Rīgas Musicas Skola. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
