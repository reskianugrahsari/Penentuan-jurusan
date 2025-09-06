import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Seberapa tertarik Anda dengan eksperimen sains dan penelitian laboratorium?",
    category: "IPA",
    options: [
      { text: "Sangat tertarik", scores: { "IPA": 3, "Teknologi": 2, "Kesehatan": 2 } },
      { text: "Cukup tertarik", scores: { "IPA": 2, "Teknologi": 1 } },
      { text: "Kurang tertarik", scores: { "IPA": 1 } },
      { text: "Tidak tertarik", scores: {} }
    ]
  },
  {
    id: 2,
    text: "Apakah Anda senang menganalisis data ekonomi dan tren pasar?",
    category: "Bisnis",
    options: [
      { text: "Sangat senang", scores: { "Bisnis": 3, "IPS": 2 } },
      { text: "Cukup senang", scores: { "Bisnis": 2, "IPS": 1 } },
      { text: "Kurang senang", scores: { "Bisnis": 1 } },
      { text: "Tidak senang", scores: {} }
    ]
  },
  {
    id: 3,
    text: "Bagaimana perasaan Anda tentang menulis cerita, puisi, atau artikel?",
    category: "Bahasa",
    options: [
      { text: "Sangat suka", scores: { "Bahasa": 3, "Seni": 1 } },
      { text: "Cukup suka", scores: { "Bahasa": 2 } },
      { text: "Kurang suka", scores: { "Bahasa": 1 } },
      { text: "Tidak suka", scores: {} }
    ]
  },
  {
    id: 4,
    text: "Seberapa tertarik Anda dengan pemrograman komputer dan pengembangan aplikasi?",
    category: "Teknologi",
    options: [
      { text: "Sangat tertarik", scores: { "Teknologi": 3, "IPA": 1 } },
      { text: "Cukup tertarik", scores: { "Teknologi": 2 } },
      { text: "Kurang tertarik", scores: { "Teknologi": 1 } },
      { text: "Tidak tertarik", scores: {} }
    ]
  },
  {
    id: 5,
    text: "Apakah Anda senang membantu orang lain mengatasi masalah kesehatan?",
    category: "Kesehatan",
    options: [
      { text: "Sangat senang", scores: { "Kesehatan": 3, "IPA": 1 } },
      { text: "Cukup senang", scores: { "Kesehatan": 2 } },
      { text: "Kurang senang", scores: { "Kesehatan": 1 } },
      { text: "Tidak senang", scores: {} }
    ]
  },
  {
    id: 6,
    text: "Bagaimana minat Anda terhadap sejarah dan budaya?",
    category: "IPS",
    options: [
      { text: "Sangat berminat", scores: { "IPS": 3, "Bahasa": 1 } },
      { text: "Cukup berminat", scores: { "IPS": 2 } },
      { text: "Kurang berminat", scores: { "IPS": 1 } },
      { text: "Tidak berminat", scores: {} }
    ]
  },
  {
    id: 7,
    text: "Seberapa tertarik Anda dengan menggambar, melukis, atau desain grafis?",
    category: "Seni",
    options: [
      { text: "Sangat tertarik", scores: { "Seni": 3, "Teknologi": 1 } },
      { text: "Cukup tertarik", scores: { "Seni": 2 } },
      { text: "Kurang tertarik", scores: { "Seni": 1 } },
      { text: "Tidak tertarik", scores: {} }
    ]
  },
  {
    id: 8,
    text: "Apakah Anda suka mengorganisir acara atau memimpin tim?",
    category: "Bisnis",
    options: [
      { text: "Sangat suka", scores: { "Bisnis": 3, "IPS": 1 } },
      { text: "Cukup suka", scores: { "Bisnis": 2 } },
      { text: "Kurang suka", scores: { "Bisnis": 1 } },
      { text: "Tidak suka", scores: {} }
    ]
  },
  {
    id: 9,
    text: "Bagaimana minat Anda terhadap matematika dan statistik?",
    category: "IPA",
    options: [
      { text: "Sangat berminat", scores: { "IPA": 3, "Teknologi": 2, "Bisnis": 1 } },
      { text: "Cukup berminat", scores: { "IPA": 2, "Teknologi": 1 } },
      { text: "Kurang berminat", scores: { "IPA": 1 } },
      { text: "Tidak berminat", scores: {} }
    ]
  },
  {
    id: 10,
    text: "Seberapa tertarik Anda dengan bahasa asing dan komunikasi internasional?",
    category: "Bahasa",
    options: [
      { text: "Sangat tertarik", scores: { "Bahasa": 3, "IPS": 1 } },
      { text: "Cukup tertarik", scores: { "Bahasa": 2 } },
      { text: "Kurang tertarik", scores: { "Bahasa": 1 } },
      { text: "Tidak tertarik", scores: {} }
    ]
  },
  {
    id: 11,
    text: "Apakah Anda senang menganalisis masalah sosial dan politik?",
    category: "IPS",
    options: [
      { text: "Sangat senang", scores: { "IPS": 3, "Bahasa": 1 } },
      { text: "Cukup senang", scores: { "IPS": 2 } },
      { text: "Kurang senang", scores: { "IPS": 1 } },
      { text: "Tidak senang", scores: {} }
    ]
  },
  {
    id: 12,
    text: "Bagaimana perasaan Anda tentang bekerja dengan teknologi terbaru?",
    category: "Teknologi",
    options: [
      { text: "Sangat antusias", scores: { "Teknologi": 3, "IPA": 1 } },
      { text: "Cukup antusias", scores: { "Teknologi": 2 } },
      { text: "Kurang antusias", scores: { "Teknologi": 1 } },
      { text: "Tidak antusias", scores: {} }
    ]
  },
  {
    id: 13,
    text: "Seberapa tertarik Anda dengan musik, teater, atau seni pertunjukan?",
    category: "Seni",
    options: [
      { text: "Sangat tertarik", scores: { "Seni": 3, "Bahasa": 1 } },
      { text: "Cukup tertarik", scores: { "Seni": 2 } },
      { text: "Kurang tertarik", scores: { "Seni": 1 } },
      { text: "Tidak tertarik", scores: {} }
    ]
  },
  {
    id: 14,
    text: "Apakah Anda tertarik mempelajari anatomi dan fisiologi tubuh manusia?",
    category: "Kesehatan",
    options: [
      { text: "Sangat tertarik", scores: { "Kesehatan": 3, "IPA": 2 } },
      { text: "Cukup tertarik", scores: { "Kesehatan": 2, "IPA": 1 } },
      { text: "Kurang tertarik", scores: { "Kesehatan": 1 } },
      { text: "Tidak tertarik", scores: {} }
    ]
  },
  {
    id: 15,
    text: "Bagaimana minat Anda terhadap kewirausahaan dan memulai bisnis sendiri?",
    category: "Bisnis",
    options: [
      { text: "Sangat berminat", scores: { "Bisnis": 3, "Teknologi": 1 } },
      { text: "Cukup berminat", scores: { "Bisnis": 2 } },
      { text: "Kurang berminat", scores: { "Bisnis": 1 } },
      { text: "Tidak berminat", scores: {} }
    ]
  }
];