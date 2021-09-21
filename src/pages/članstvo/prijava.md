---
templateKey: membership-application-page
lang: hr
hero:
  height: 26
  image: /img/hans-reniers-lqgjcmy5qcm-unsplash2.jpg
  subtitle: |
    Online obrazac za prijavu u HDIR udrugu
  title: Nova prijava
  top: Prijava za članstvo
  link:
    page: ""
    title: ""
form:
  button: Pošalji prijavu
  isPdf: true
  name: membership
  pdf:
    day: Dana
    defaultFullName: Vaše ime i prezime
    header:
      leftColumn:
        - text: "OiB: 01690550600"
        - text: Bijenička 54
        - text: "Tel: 01/457-1292"
        - text: www.hdir.hr
      rightColumn:
        - text: "MB: 2517744"
        - text: HR-10000 Zagreb
        - text: www.hdir.hr
        - text: "E-mail: info@hdir.hr"
      title: Hrvatsko društvo za istraživanje raka
    mailingDetails:
      - text: "Molimo da godišnju članarinu uplatite općom uplatnicom ili internet
          bankarstvom na račun HDIR-a:"
      - text: "Iznos: 20€ u kunskoj protuvrijednosti"
      - text: "Opis plaćanja: $fullName – za članarinu"
      - text: "IBAN primatelja: HR5023600001102084564"
    paymentDetails:
      - text: "Molimo da ispunjenu i potpisanu pristupnicu dostavite na adresu tajnika
          HDIR-a:"
      - text: Dr. sc. Petar Ozretić
      - text: Institut Ruđer Bošković
      - text: Bijenička 54, HR-10000 Zagreb
    signature: "Potpis:"
    title: PRISTUPNICA ZA ČLANSTVO
  sections:
    - fields:
        - isFullWidth: false
          isRequired: true
          name: firstName
          title: Ime
          type: text
        - isFullWidth: false
          isRequired: true
          name: lastName
          title: Prezime
          type: text
        - title: Titula
          name: title
          type: text
          isRequired: false
          isFullWidth: false
        - title: Znanstveni stupanj
          name: degree
          type: text
          isRequired: false
          isFullWidth: false
        - title: Datum rođenja
          name: birthday
          type: date
          isRequired: true
          isFullWidth: false
        - title: Mjesto rođenja
          name: birthPlace
          type: text
          isRequired: false
          isFullWidth: false
        - title: OIB
          name: PIN
          isRequired: true
          type: number
      title: Osnovni podaci
    - fields:
        - title: Ustanova zaposlenja
          name: workplace
          type: text
        - title: Odjel/odsjek/zavod
          name: department
          type: text
        - title: Ulica (zaposlenja ili stanovanja)
          name: street
          type: text
          isRequired: true
        - title: Kućni broj (zaposlenja ili stanovanja)
          name: streetNumber
          type: number
          isRequired: true
        - title: Grad (zaposlenja ili stanovanja)
          name: city
          type: text
          isRequired: true
        - title: Poštanski broj (zaposlenja ili stanovanja)
          name: postalCode
          type: number
          isRequired: true
        - title: Država (zaposlenja ili stanovanja)
          name: country
          type: text
          isRequired: true
        - title: Broj mobitela
          name: phone
          type: text
          isRequired: true
        - title: E-mail
          isRequired: true
          type: email
          name: email
        - title: Znanstevni interes
          name: interest
          type: textarea
          isFullWidth: true
        - isRequired: true
          isFullWidth: true
          type: checkbox
          title: Slažem se da moji podaci navedeni u ovoj pristupnici budu proslijeđeni u
            European Association for Cancer Research (EACR) u svrhu otvaranja
            besplatnog korisničkog računa potrebnog za učlanjenje u navedenu
            udrugu te radi primanja njihove pošte u elektronskom i papirnatom
            formatu.
          name: agreement
      title: Kontakt podaci
  success:
    button: Preuzmi PDF datoteku
    subtitle: Molimo Vas da preuzmete i ispišete PDF datoteku te potpisani dokument
      dostavite tajniku HDIR-a.
    title: Hvala na ispunjavanju obrasca
---
