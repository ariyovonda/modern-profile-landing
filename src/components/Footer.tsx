
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const productLinks = [
    "Gadai Perhiasan", 
    "Gadai Elektronik", 
    "Kredit Mikro", 
    "Pembiayaan Usaha", 
    "Kredit Multiguna", 
    "Investasi Emas"
  ];
  
  const companyLinks = [
    "Tentang Kami", 
    "Karir", 
    "Berita", 
    "Kebijakan Privasi", 
    "Syarat & Ketentuan", 
    "Hubungi Kami"
  ];
  
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube" },
  ];

  return (
    <footer className="bg-luxury-100 text-cream pt-16 pb-8">
      <div className="content-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-5">
              <a href="/" className="text-3xl font-bold">
                <span className="text-gold">Dana</span>Sejahtera
              </a>
            </div>
            <p className="text-cream/60 mb-6">
              Mitra terpercaya untuk solusi keuangan yang aman dan terjangkau 
              bagi seluruh masyarakat Indonesia.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-full bg-luxury-300 hover:bg-luxury-400 text-gold flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5">Produk & Layanan</h4>
            <ul className="space-y-3">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-cream/60 hover:text-gold transition-colors inline-flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-transform group-hover:translate-x-1 text-gold" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5">Perusahaan</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-cream/60 hover:text-gold transition-colors inline-flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-transform group-hover:translate-x-1 text-gold" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-gold mt-1 mr-3 shrink-0" />
                <span className="text-cream/60">
                  Gedung DanaSejahtera<br />
                  Jl. Jendral Sudirman Kav. 52-53<br />
                  Jakarta Selatan, 12190
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 shrink-0" />
                <span className="text-cream/60">0800-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3 shrink-0" />
                <span className="text-cream/60">info@danasejahtera.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-luxury-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} PT Dana Sejahtera Indonesia. Hak Cipta Dilindungi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-cream/60 text-sm hover:text-gold transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-cream/60 text-sm hover:text-gold transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-cream/60 text-sm hover:text-gold transition-colors">
                Peta Situs
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-cream/50 text-xs">
            DanaSejahtera terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
