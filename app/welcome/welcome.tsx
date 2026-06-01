import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import React from 'react';

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      {/* Ide hívjuk be a lentebb definiált önéletrajz komponenst */}
      <CV />
    </main>
  );
}

// --- INNENTŐL KEZDŐDIK A TE ÖNÉLETRAJZI KÓDOD ---

interface TimelineItemProps {
  title: string;
  date: string;
  subtitle?: string;
  details?: string[];
}

const CV: React.FC = () => {
  const colors = {
    primary: '#2c3e50',
    secondary: '#3498db',
    bg: '#f8f9fa',
    text: '#333',
    muted: '#7f8c8d',
    tagBg: '#ecf0f1'
  };

  const styles = {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: colors.text,
      lineHeight: 1.6,
      width: '100%', // Hozzáadva, hogy a flexbox konténerben is jól mutasson
    } as React.CSSProperties,
    header: {
      textAlign: 'center' as const,
      borderBottom: `3px solid ${colors.secondary}`,
      paddingBottom: '20px',
      marginBottom: '30px',
    },
    h1: {
      color: colors.primary,
      marginBottom: '5px',
      fontSize: '2.5em',
      margin: 0,
    },
    subtitle: {
      color: colors.secondary,
      fontSize: '1.2em',
      fontWeight: 'bold',
      marginTop: '5px',
    },
    contactInfo: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      flexWrap: 'wrap' as const,
      marginTop: '15px',
      fontSize: '0.95em',
    },
    contactSpark: {
      backgroundColor: colors.tagBg,
      padding: '5px 12px',
      borderRadius: '20px',
      color: '#555',
    },
    h2: {
      color: colors.primary,
      borderLeft: `4px solid ${colors.secondary}`,
      paddingLeft: '10px',
      marginTop: '35px',
      fontSize: '1.5em',
    },
    sectionContent: {
      paddingLeft: '14px',
    },
    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '10px',
    },
    skillTag: (isHobby: boolean) => ({
      backgroundColor: isHobby ? colors.muted : colors.primary,
      color: 'white',
      padding: '8px 15px',
      borderRadius: '25px',
      fontSize: '0.9em',
    }) as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Németh Botond</h1>
        <p style={styles.subtitle}>Mechatronikai mérnök hallgató</p>
        <div style={styles.contactInfo}>
          <span style={styles.contactSpark}>✉️ nemeth.botond05@gmail.com</span>
          <span style={styles.contactSpark}>📱 +36 30 355 5067</span>
          <span style={styles.contactSpark}>📍<a href="https://www.google.com/maps/place/Szeged" target="_blank" rel="noopener noreferrer">Szeged</a></span>
          <span style={styles.contactSpark}>🔗 LinkedIn / Facebook</span>
        </div>
      </header>

      <section>
        <h2 style={styles.h2}>Rövid Bemutatkozás</h2>
        <div style={styles.sectionContent}>
          <p>
            A Budapesti Műszaki és Gazdaságtudományi Egyetemen vagyok jelenleg hallgató mechatronikai mérnök alapszakon, 
            okoseszközök tervezése specializáción. Középiskolás korom óta foglalkoztat a robotika, ezért részt is vettem 
            csapatversenyeken, ahonnan mindig jó eredményeket hoztunk el (pl. Legórobot verseny dobogós hely, 2018). 
            Érdekel a robotika, biomechatronika, elektrotechnika, nyomatott és a programozható áramkörök. Szeretek utazni, 
            kirándulni a természetben és más kultúrákkal megismerkedni. Nyitott vagyok az újdonságokra, de szeretem a 
            rendezettséget és az összeszedettséget.
          </p>
        </div>
      </section>

      <section>
        <h2 style={styles.h2}>Tanulmányok</h2>
        <div style={styles.sectionContent}>
          <TimelineItem 
            title="Mechatronikai mérnök - BSc (Okoseszközök tervezése specializáció)" 
            date="2023. szeptember - jelenleg is" 
            subtitle="BME, Magyarország" 
          />
          <TimelineItem 
            title="Erasmus Félév" 
            date="2026.03.27 - 2026.06.20" 
            subtitle="DHBW, Németország" 
            details={["Fejlesztettem az angol és német nyelvtudásomat, és sok kultúrával ismerkedtem meg."]}
          />
          <TimelineItem 
            title="Mechatronikai technikus" 
            date="2019.09 - 2023.06" 
            subtitle="Szegedi SZC Déri Miksa Műszaki Technikum" 
          />
          <TimelineItem 
            title="Erősáramú elektrotechnikus / Villanyszerelő" 
            date="2023.01 - 2023.05" 
            subtitle="Szegedi SZC Déri Miksa Műszaki Technikum" 
          />
        </div>
      </section>

      <section>
        <h2 style={styles.h2}>Szakmai és Önkéntes Tapasztalat</h2>
        <div style={styles.sectionContent}>
          <TimelineItem 
            title="Cserkész Középvezető" 
            date="2023 - jelenleg is" 
            subtitle="1507. Árpádházi Szent Margit Cserkész Csapat" 
            details={[
              "Több kis csapat (8-10 fő) vezetőjeként koordinálok.",
              "Nagylétszámú (100-120 fős) táborok logisztikai feladatainak, rendezvények és programok megszervezése.",
              "Korábban (2020-tól) cserkész vezetőként egy kisebb (4-5 fős) csapatot irányítottam."
            ]}
          />
          <TimelineItem 
            title="Önkéntes Műszaki Feladatok" 
            date="Folyamatos" 
            subtitle="Helyi templom" 
            details={["Mindennapi műszaki feladatok lebonyolítása (pl. állvány hegesztése, homlokzat festés, szegénykonyhán segédkezés)."]}
          />
          <TimelineItem 
            title="Segédmunkás" 
            date="2022.06" 
            subtitle="Alsó-Tisza-Vidéki Vízügyi Igazgatóság, Szeged" 
            details={["Szivattyú telepek karbantartása és egyéb villanyszerelési munkák."]}
          />
        </div>
      </section>

      <section>
        <h2 style={styles.h2}>Készségek</h2>
        <div style={{...styles.sectionContent, ...styles.skillsContainer}}>
          {["Matlab", "Python", "C / C++ (Arduino)", "MS Office & Google Docs", "Solid Edge & Solid Works", "Labview", "KiCad", "Inkscape & Canva", "Hegesztés"].map(skill => (
            <span key={skill} style={styles.skillTag(false)}>{skill}</span>
          ))}
        </div>
      </section>

      <section>
        <h2 style={styles.h2}>Nyelvtudás és Egyéb</h2>
        <div style={styles.sectionContent}>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li><strong>Angol:</strong> B2 / Középfok (kommunikációképes szint, 2020 óta).</li>
            <li><strong>Német:</strong> Alapfok / társalgási szint (érettségi jó eredménnyel).</li>
            <li><strong>Magyar:</strong> Anyanyelvi szint.</li>
            <li><strong>Jogosítvány:</strong> B kategória (Személygépkocsi).</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 style={styles.h2}>Hobbik és Szabadidő</h2>
        <div style={{...styles.sectionContent, ...styles.skillsContainer}}>
          {["Arduino projektek & Barkácsolás", "Természetjárás & Túrázás", "Cserkészet", "Biciklizés & Frizbizés", "Filmek & Sorozatok"].map(hobby => (
            <span key={hobby} style={styles.skillTag(true)}>{hobby}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, subtitle, details }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: 'bold' }}>
        <span style={{ color: '#2c3e50', fontSize: '1.1em' }}>{title}</span>
        <span style={{ fontStyle: 'italic', color: '#7f8c8d', fontSize: '0.9em' }}>{date}</span>
      </div>
      {subtitle && <div style={{ color: '#555', fontStyle: 'italic', fontSize: '0.95em' }}>{subtitle}</div>}
      {details && (
        <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ... a fájlod hátralévő része (például a `const resources = [...]` maradjon meg lentebb)