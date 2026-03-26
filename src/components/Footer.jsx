import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube} from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // for mail

const Footer = () => {
    return (

        <footer class="bg-white dark:bg-background-dark py-12 border-t border-slate-100 dark:border-slate-800 mt-20">
            <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div class="flex items-center gap-2">
                    <div class="text-primary/50">
                        <span class="material-symbols-outlined text-2xl">auto_stories</span>
                    </div>
                    <h2 class="text-md font-bold tracking-tight text-slate-400">Spokqing Writing Seminar © 2026</h2>
                </div>
                <div class="flex gap-8 text-sm font-medium text-slate-500">
                    <a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                    <a class="hover:text-primary transition-colors" href="#">Terms of Use</a>
                    <a class="hover:text-primary transition-colors" href="#">Contact Support</a>
                </div>
              <div className="flex gap-4">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/spokqing?igsh=Z3UxeXAxZnc4ZG"
    target="_blank"
    className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 hover:bg-pink-500 hover:text-white transition-all"
  >
    <FaInstagram className="text-lg" />
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@spokqing?_t=ZS-8zRdq6bTFqL&_r=1"
    target="_blank"
    className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-all"
  >
    <FaTiktok className="text-lg" />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1AmrwzMzZ3/?mibextid=LQQJ4d"
    target="_blank"
    className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
  >
    <FaFacebookF className="text-lg" />
  </a>

  {/* Youtube */}
  <a
    href="https://youtube.com/@spokqing?si=7Le7LlkMNd7ZGNfU"
    target="_blank"
    className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
  >
    <FaYoutube className="text-lg" />
  </a>


  {/* Mail */}
  <a
    href="mailto:spokqing@gmail.com"
    className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
  >
    <MdEmail className="text-lg" />
  </a>
</div>
            </div>
        </footer>
    )
}

export default Footer
