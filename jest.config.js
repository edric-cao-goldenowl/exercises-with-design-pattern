module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true, // Bật thu thập độ phủ
  coverageDirectory: 'coverage', // Thư mục lưu trữ kết quả độ phủ
  collectCoverageFrom: [
    'Solid/**/*.{ts,tsx}', // Tập tin nào sẽ được thu thập độ phủ
    '!Solid/**/*.d.ts', // Bỏ qua các file định nghĩa TypeScript
    '!Solid/**/main.*'
  ],
};