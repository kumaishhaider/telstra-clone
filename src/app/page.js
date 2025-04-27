import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Telstra Support',
  description: 'Reliable telecom and internet services in australia for calls and data',
  keywords: ['telstra', 'telstranumber', 'telstracalls', 'telstraservices', 'telstracontact', 'telstrasupport'],
  icons: {
    icon: '/favicon.png',   // <-- add this line
    apple: '/favicon.png',  // <-- optional, for iPhones
  },
  themeColor: '#0078d7',    // <-- optional, for Android browser color
};

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image 
            src="/logo.png" 
            alt="Company Logo" 
            width={100} 
            height={100} 
            style={{ objectFit: 'contain' }} 
          />
        </div>
        <a href="tel:+1234567890" className={styles.callButton}>
          Call Us
        </a>
      </header>

      <main className={styles.main}>
        <h1>Welcome to Telstra Telecom Services</h1>
        <p>
          For support or enquiries{' '}
          <a href="tel:+1234567890" className={styles.phoneLink}>
            Call Us
          </a>
        </p>
      </main>

      <footer className={styles.footer}>
      
  <div className={styles.footerContainer}>
    <div className={styles.footerLinks}>
      <a href="#">About</a>
      <a href="#">Support</a>
      <a href="#">Contact Us</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Privacy</a>
    </div>
    <div className={styles.footerCopy}>
      &copy; {new Date().getFullYear()} Your Telecom Services. All rights reserved.
    </div>
  </div>

      </footer>
    </>
  );
}
