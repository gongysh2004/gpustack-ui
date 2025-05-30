// this list is copied from llamacpp repo
enum FileType {
  F32 = 0,
  F16 = 1,
  Q4_0 = 2,
  Q4_1 = 3,
  Q4_1_SOME_F16 = 4,
  Q8_0 = 7,
  Q5_0 = 8,
  Q5_1 = 9,
  Q2_K = 10,
  Q3_K_S = 11,
  Q3_K_M = 12,
  Q3_K_L = 13,
  Q4_K_S = 14,
  Q4_K_M = 15,
  Q5_K_S = 16,
  Q5_K_M = 17,
  Q6_K = 18,
  IQ2_XXS = 19,
  IQ2_XS = 20,
  Q2_K_S = 21,
  IQ3_XS = 22,
  IQ3_XXS = 23,
  IQ1_S = 24,
  IQ4_NL = 25,
  IQ3_S = 26,
  IQ3_M = 27,
  IQ2_S = 28,
  IQ2_M = 29,
  IQ4_XS = 30,
  IQ1_M = 31,
  BF16 = 32,
  Q4_0_4_4 = 33,
  Q4_0_4_8 = 34,
  Q4_0_8_8 = 35,
  TQ1_0 = 36,
  TQ2_0 = 37
}

export const fileTypeList = [
  'F32',
  'F16',
  'Q4_0',
  'Q4_1',
  'Q4_1_SOME_F16',
  'Q8_0',
  'Q5_0',
  'Q5_1',
  'Q2_K',
  'Q3_K_S',
  'Q3_K_M',
  'Q3_K_L',
  'Q4_K_S',
  'Q4_K_M',
  'Q5_K_S',
  'Q5_K_M',
  'Q6_K',
  'IQ2_XXS',
  'IQ2_XS',
  'Q2_K_S',
  'IQ3_XS',
  'IQ3_XXS',
  'IQ1_S',
  'IQ4_NL',
  'IQ3_S',
  'IQ3_M',
  'IQ2_S',
  'IQ2_M',
  'IQ4_XS',
  'IQ1_M',
  'BF16',
  'Q4_0_4_4',
  'Q4_0_4_8',
  'Q4_0_8_8',
  'TQ1_0',
  'TQ2_0'
];

export const getFileType = (fileName: string): string | null => {
  const pattern = new RegExp(`[._-](${fileTypeList.join('|')})\\.gguf$`, 'i');
  const match = fileName.match(pattern);

  return match ? match[1].toUpperCase() : null;
};

export default FileType;
