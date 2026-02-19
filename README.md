# TeleDiş - Tele-Diş Hekimliği Mobil Uygulaması

TeleDiş, diş hekimlerinin hastalarını uzaktan veya klinik ortamında dijital olarak yönetmelerini sağlayan modern bir mobil uygulamadır.

## 📱 Proje Hakkında

Bu uygulama, hekimlerin hasta kayıtlarına hızlıca erişebilmesi, detaylı dental değerlendirmeler yapabilmesi ve tedavi süreçlerini takip edebilmesi için tasarlanmıştır. Kullanıcı dostu arayüzü ve görselleştirilmiş veri girişi ile hekimlerin iş yükünü hafifletmeyi hedefler.

## ✨ Özellikler

### 1. Hekim Girişi (`LoginScreen`)
- Güvenli ve basit giriş ekranı.
- Kullanıcı adı ve şifre ile kimlik doğrulama.

### 2. Ana Ekran (`HomeScreen`)
- Hekimi karşılayan özet ekran.
- Hızlı erişim menüsü:
  - **Hasta Listesi**: Tüm hastaların görüntülendiği ekran.
  - **Profilim**: Hekim profil ayarları.
  - **Geri Bildirim**: Uygulama içi geri bildirim.

### 3. Hasta Yönetimi
- **Hasta Listesi (`PatientListScreen`)**:
  - Kayıtlı hastaların listelenmesi.
  - İsim ile hasta arama özelliği.
  - Hasta özet kartları (Fotoğraf, İsim, Yaş).
- **Hasta Detayı (`PatientDetailScreen`)**:
  - Hastanın profil fotoğrafı ve demografik bilgileri.
  - Hızlı işlem menüsü (Bilgiler, Anamnez, Fotoğraflar, Değerlendirme).

### 4. Dental Değerlendirme (`EvaluationScreen`)
- **İnteraktif Diş Şeması**: Üst ve alt çene için dişlerin görsel olarak seçilebilmesi.
- **Sorunlu Diş İşaretleme**: Dokunarak sorunlu dişlerin kırmızı ile işaretlenmesi.
- **Genel Değerlendirme**:
  - Diş eti kanaması (Var/Yok).
  - Plak varlığı (Var/Yok).

### 5. Diğer Modüller
- **Anamnez (`AnamnezScreen`)**: Hastanın tıbbi geçmişinin görüntülenmesi.
- **Fotoğraflar (`PhotoScreen`)**: Ağız içi fotoğrafların yüklenmesi ve görüntülenmesi.

## 🛠 Kullanılan Teknolojiler

- **React Native**: Cross-platform mobil uygulama geliştirme.
- **Expo**: Geliştirme ve derleme aracı.
- **TypeScript**: Tip güvenli kod yapısı.
- **React Navigation**: Sayfalar arası geçiş yönetimi.
- **Expo Vector Icons**: İkon kütüphanesi.

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

2.  **Uygulamayı Başlatın:**
    ```bash
    npx expo start
    ```

3.  **Cihazda Test Edin:**
    - **Android:** Android Studio emülatörü veya Expo Go uygulaması ile QR kodu taratın.
    - **iOS:** iOS Simulator veya iPhone kamerası ile QR kodu taratın.

## 📁 Proje Yapısı

```
src/
├── components/    # Tekrar kullanılabilir bileşenler (Button, Card, Input vb.)
├── data/          # Örnek veri setleri (mockPatients)
├── navigation/    # Uygulama navigasyon yapılandırması
└── screens/       # Uygulama ekranları
```
Expo Karekod
<img width="334" height="311" alt="image" src="https://github.com/user-attachments/assets/86c589c3-ec5b-4f54-bd57-2ba238d541db" />
