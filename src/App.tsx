// App.tsx
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import './styles/App.css';

import CheckboxItem from './components/checkboxItem';

import CustomIcon from './search.svg';
// import  styles  from './styles';

const jsonData = {
  "data": [
    "Edebiyat & Romanlar",
    "Gerilim filmleri",
    "Çocuk kitapları",
    "Genç Yetişkin",
    "Yemek kitapları",
    "Seyahat kitapları",
    "Sanat, Fotoğrafçılık & Mimarlık",
    "Psikoloji",
    "Aile & Sağlık",
    "Yönetim Kitapları",
    "Tüm kitaplar",
    "İngilizce kitaplar",
    "Almanca",
    "Fransızca",
    "İspanyol",
    "E-kitaplar & E-okuyucular",
    "E-kitaplar",
    "E-kitapların faydaları",
    "İngilizce'de en iyi 100",
    "Yeni yayınlananlar",
    "İkinci el kitaplar",
    "Magazin oku",
    "Müzik",
    "CD'ler",
    "LP'ler",
    "DVD'ler & Blu-ray'ler",
    "En iyi 100 albüm",
    "Bütün müzikler",
    "Filmler & Diziler",
    "Film",
    "TV dizisi",
    "Belgeseller",
    "En İyi 100 Film & Dizi",
    "Tüm filmler & diziler",
    "Oyunlar",
    "Playstation4",
    "Xbox One",
    "Nintendo Anahtarı",
    "PC Oyunları",
    "Nintendo 2DS/3DS",
    "Tüm platformlar",
    "Sanal gerçeklik",
    "Oyun İndirmeleri",
    "Rezerve etmek ",
    "Oyun Konsolları & Aksesuarları",
    "Bütün oyunlar",
    "Disney mağazası",
    "HBO mağazası",
    "Tüm hayran mağazaları",
    "Konsollarla ilgili tavsiyeler",
    "Festivalin olmazsa olmazları",
    "Müzik & Film Fırsatları",
    "Bilgisayar",
    "Dizüstü bilgisayarlar",
    "Masaüstü bilgisayarlar",
    "Monitörler",
    "Bilgisayar Aksesuarları",
    "Çantalar & Kılıflar",
    "Mürekkep Kartuşları & Tonerler",
    "Yazılım",
    "Ağ & İnternet",
    "Tüm bilgisayar öğeleri",
    "Telefon",
    "Telefon aksesuarları",
    "Akıllı telefonlar",
    "Tabletler",
    "Tablet aksesuarları",
    "Etkinlik takipçileri",
    "Akıllı saatler",
    "E-okuyucular",
    "Ev otomasyonu",
    "GPS sistemleri",
    "Ses & Hi-Fi",
    "Kablosuz hoparlörler",
    "Ses çubukları",
    "Kulaklıklar",
    "Bluetooth hoparlörler",
    "Tüm ses & hi-fi",
    "Televizyonlar",
    "Alıcılar & Yükselteçler",
    "Ev Sineması",
    "Fotoğraf kameraları",
    "Video kameralar",
    "Cihazlar",
    "Bahçe & Kendin Yap aletleri",
    "Kişisel Bakım",
    "Oyuncaklar",
    "Bulmacalar",
    "Oyunlar",
    "Bebek & Yeni Yürümeye Başlayan Çocuk",
    "Bina inşaatı",
    "Araçlar",
    "Bebekler & Sevimli Oyuncaklar",
    "Eğitici oyuncaklar",
    "Rol yapma",
    "Tahta oyuncak",
    "Sayı oyunları",
    "Tüm oyuncaklar",
    "Süslü Elbise",
    "Parti Malzemeleri",
    "Açık hava oyuncakları",
    "Denge bisikletleri",
    "Trambolinler",
    "Tüm dış mekan oyuncakları",
    "Hobi & Yaratıcı",
    "Çocuklar için el sanatları",
    "Boyama çizimi",
    "Tekstil & El Sanatları",
    "Ev dekorasyon",
    "Modelleme",
    "Model demiryolu",
    "RC araçları",
    "Dronlar",
    "Tüm hobiler & yaratıcı",
    "Popüler Karakterler",
    "Hoverboard'lar",
    "LEGO",
    "PLAYMOBİL",
    "VTech",
    "Balıkçı fiyatı",
    "Oyuncak promosyonları",
    "Çocuk giyim",
    "Bebek giysileri",
    "Kız kıyafetleri",
    "Erkek çocuk kıyafetleri",
    "Yeni geldi",
    "Satış",
    "Annem için kıyafetler",
    "Hamile kıyafetleri",
    "Çocuk Bezleri & Bakım",
    "Bebek bezi",
    "Banyo",
    "Tüm bakım",
    "Bebek monitörleri",
    "Bebek odası",
    "Çocuk odası",
    "Yatak takımı",
    "Sandalyeler",
    "Güvenlik",
    "Bebek kutuları",
    "Bebek & Küçük Çocuk Oyuncakları",
    "Yiyecek içecek",
    "Bebek maması",
    "Göğüs pompaları",
    "Bebek şişeleri",
    "Tüm yiyecek & içecekler",
    "Araba koltukları",
    "Bisiklet koltukları",
    "Arabalar",
    "Bebek arabaları",
    "Bebek taşıyıcıları & bezleri",
    "Yolda için her şey",
    "Doğum hediyeleri",
    "Bebek hediyeleri",
    "Doğum Listesi",
    "Tüm bebek eşyaları",
    "Lüks kozmetikler",
    "Makyaj yapmak",
    "Kadın parfümü",
    "Erkek parfümü",
    "Tüm parfümler",
    "Lüks bakım",
    "Vücut bakımı",
    "Saç Bakımı",
    "Yüz bakımı",
    "Tıraş &; Epilasyon",
    "Ağız bakımı",
    "Güneş koruması",
    "Tüm kişisel bakım",
    "Sağlık",
    "Besin takviyeleri",
    "Kulaklık",
    "Zayıflama",
    "Optik",
    "Tüm sağlık",
    "Teçhizat",
    "Elektrikli diş fırçaları",
    "Tıraş & Düzeltme",
    "Elektrikli epilasyon",
    "Saç stili",
    "Kan basıncı monitörleri",
    "Tüm ekipman",
    "Yeni ürünler",
    "Lüks koleksiyon",
    "En İyi 10 Kadın Kokusu",
    "Eczane promosyonları",
    "Ev ürünleri",
    "Stil Dergisi",
    "Fark etmek, farkına varmak",
    "Ritüeller",
    "L'Oréal Paris",
    "Tüm lüks markalar",
    "Hepsi Güzel &; Sağlıklı",
    "Mücevher",
    "Kadın takıları",
    "Erkek takıları",
    "Çocuk Takıları",
    "Yeni koleksiyon",
    "Saatler",
    "Kadın saatleri",
    "Erkek saatleri"
  ]
}

const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const options = jsonData.data
    .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(item => ({ value: item, label: item }));

    const handleCheckboxChange = (item: string, isChecked: boolean): void => {
      if (isChecked) {
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
      } else {
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((selectedItem) => selectedItem !== item)
        );
      }
    };

  return (
    <div className="App">
      <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8 12.2l-3.9-4c.6-.8 1.1-2 1.1-3.1 0-2.8-2.3-5-5-5-2.8 0-5 2.3-5 5 0 2.8 2.2 5 5 5 .8 0 1.7-.2 2.3-.5l3.9 4.3c.2.2.6.2.8 0l.8-.8c.3-.3.3-.7 0-.9zM6 8.1c-1.7 0-3-1.4-3-3 0-1.7 1.4-3 3-3s3 1.4 3 3-1.4 3-3 3z" fillRule="evenodd" />
      </svg>
      
      <input 
        type="text"
        placeholder="Arama yap..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="search-buttons">
<button className="search-button">Arama Yap</button>

</div>
     
      <div>
      {[
        ...selectedItems.map((value) => ({ value, label: value })),
        ...options.filter((option) => !selectedItems.includes(option.value)),
      ].map((option) => (
          <CheckboxItem
            key={option.value}
            label={option.label}
            isChecked={selectedItems.includes(option.value)}
            onChange={(isChecked) => handleCheckboxChange(option.value, isChecked)}
          />
        ))}
      </div>
    </div>
  );
};


export default App;