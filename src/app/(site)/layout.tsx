import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import { ModalProvider } from '@/components/ProductModals';
import AosInit from '@/components/AosInit';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <AosInit />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </ModalProvider>
  );
}
