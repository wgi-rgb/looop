window.SIGNAGE_CONFIG = {
  "organisatie": "Vlaamse Vaarschool",
  "versie": 12,
  "bijgewerkt": "2026-10-20T15:06:38.000Z",
  "slides": [
    {
      "id": "programma",
      "naam": "Programma",
      "url": "programma.html",
      "type": "slide"
    },
    {
      "id": "weer",
      "naam": "Weerbericht",
      "url": "weer.html",
      "type": "slide"
    },
    {
      "id": "webcam",
      "naam": "Webcam Nieuwpoort",
      "url": "webcam.html",
      "type": "slide"
    },
    {
      "id": "webcam-oostende",
      "naam": "Webcam haven Oostende",
      "url": "webcam-oostende.html",
      "type": "slide"
    },
    {
      "id": "marifoon",
      "naam": "Instellingen marifoon",
      "url": "mededeling.html",
      "type": "slide"
    },
    {
      "id": "schietsector",
      "naam": "Schietsectoren",
      "url": "schietsector.html",
      "type": "slide"
    },
    {
      "id": "signalisatie",
      "naam": "Signalisatie schietoefeningen",
      "url": "signalisatie.html",
      "type": "slide"
    },
    {
      "id": "windy",
      "naam": "Windy wind map",
      "type": "link",
      "url": "https://embed.windy.com/embed2.html?lat=51.2&lon=2.7&zoom=9&overlay=wind"
    },
    {
      "id": "cadeaubon",
      "naam": "Gift voucher poster",
      "type": "image",
      "url": "media/cadeaubon.png",
      "bestand": "cadeaubon.png"
    },
    {
      "id": "wind-vandaag",
      "naam": "Wind vandaag",
      "url": "wind-vandaag.html",
      "type": "slide"
    },
    {
      "id": "weer-5-dagen",
      "naam": "Weer komende 5 dagen",
      "url": "weer-5-dagen.html",
      "type": "slide"
    },
    {
      "id": "getij",
      "naam": "Getij Nieuwpoort",
      "url": "getij.html",
      "type": "slide"
    },
    {
      "id": "nu-op-zee",
      "naam": "Nu op zee",
      "url": "nu-op-zee.html",
      "type": "slide"
    }
  ],
  "playlists": [
    {
      "id": "dag",
      "naam": "Daytime",
      "items": [
        {
          "slide": "programma",
          "duur": 20
        },
        {
          "slide": "weer",
          "duur": 20
        },
        {
          "slide": "wind-vandaag",
          "duur": 20
        },
        {
          "slide": "weer-5-dagen",
          "duur": 20
        },
        {
          "slide": "getij",
          "duur": 20
        },
        {
          "slide": "nu-op-zee",
          "duur": 20
        },
        {
          "slide": "marifoon",
          "duur": 15
        },
        {
          "slide": "schietsector",
          "duur": 20
        },
        {
          "slide": "signalisatie",
          "duur": 15
        },
        {
          "slide": "webcam",
          "duur": 15
        },
        {
          "slide": "webcam-oostende",
          "duur": 15
        }
      ],
      "ticker": [
        "b1",
        "bmvgql449"
      ]
    },
    {
      "id": "avond",
      "naam": "Evening",
      "items": [
        {
          "slide": "weer",
          "duur": 6
        },
        {
          "slide": "webcam",
          "duur": 7
        },
        {
          "slide": "signalisatie",
          "duur": 15
        },
        {
          "slide": "webcam-oostende",
          "duur": 8
        }
      ],
      "ticker": [
        "b1",
        "b2"
      ]
    },
    {
      "id": "morning-briefing",
      "naam": "Morning briefing",
      "items": [
        {
          "slide": "programma",
          "duur": 20
        },
        {
          "slide": "marifoon",
          "duur": 20
        }
      ],
      "ticker": [
        "b1",
        "b2"
      ]
    },
    {
      "id": "afternoon-briefing",
      "naam": "Afternoon briefing",
      "items": [
        {
          "slide": "marifoon",
          "duur": 5
        }
      ],
      "ticker": [
        "b1",
        "bmvgql449"
      ]
    }
  ],
  "schermen": [
    {
      "id": "scherm-1",
      "naam": "Main screen",
      "standaard": "dag",
      "schema": [
        {
          "id": "regel-mb",
          "playlist": "morning-briefing",
          "dagen": [
            1,
            2,
            3,
            4,
            5
          ],
          "van": "08:00",
          "tot": "09:00",
          "aan": false
        },
        {
          "id": "regel-ab",
          "playlist": "afternoon-briefing",
          "dagen": [
            1,
            2,
            3,
            4,
            5
          ],
          "van": "13:00",
          "tot": "13:30",
          "aan": false
        },
        {
          "id": "r1",
          "playlist": "avond",
          "dagen": [
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "van": "19:00",
          "tot": "07:00",
          "aan": false
        }
      ]
    }
  ],
  "berichten": [
    {
      "id": "b1",
      "tekst": "Vaargeul Nieuwpoort gestremd van zaterdag 17 oktober tot 2 november"
    },
    {
      "id": "b2",
      "tekst": "Restaurant 't Galjoen is gesloten van maandag 5 tot woensdag 7 november - reservaties zijn verplaatst naar Restaurant De Vierboete :-)"
    },
    {
      "id": "bmvgqb1qh",
      "tekst": "Test"
    },
    {
      "id": "bmvgql449",
      "tekst": "Feest!"
    }
  ]
};
