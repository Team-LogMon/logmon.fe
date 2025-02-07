export class DateFormatter {
  /**
   * @param date
   * @param separator 연월일 사이에 들어갈 문자, 기본값 공백
   */
  static formatDateToYYYYMMDD(date: Date, separator: string = ''): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${separator}${month}${separator}${day}`;
  }

  static formatTimeStampToYYYYMMDD(
    timeStamp: number,
    separator: string = ''
  ): string {
    return DateFormatter.formatDateToYYYYMMDD(new Date(timeStamp), separator);
  }

  static formatDateToLocaleString(date: Date): string {
    return date.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  }

  static formatTimeStampToLocaleString(timeStamp: number): string {
    return DateFormatter.formatDateToLocaleString(new Date(timeStamp));
  }

  /** ✅ YYYYMMDD HH:MM:SS */
  static formatDateToYYYYMMDDHHMMSS(
    date: Date,
    separator: string = ''
  ): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}${separator}${month}${separator}${day} ${hours}:${minutes}:${seconds}`;
  }

  /** ✅ 타임스탬프를 YYYYMMDD HH:MM:SS 형식으로 변환 */
  static formatTimeStampToYYYYMMDDHHMMSS(
    timeStamp: number,
    separator: string = ''
  ): string {
    return DateFormatter.formatDateToYYYYMMDDHHMMSS(
      new Date(timeStamp),
      separator
    );
  }

  /** ✅ HHMMSS 형식으로 변환 */
  static formatDateToHHMMSS(date: Date, separator: string = ':'): string {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}${separator}${minutes}${separator}${seconds}`;
  }

  /** ✅ 타임스탬프를 HHMMSS 형식으로 변환 */
  static formatTimeStampToHHMMSS(
    timeStamp: number,
    separator: string = ':'
  ): string {
    return DateFormatter.formatDateToHHMMSS(new Date(timeStamp), separator);
  }

  /** ✅ ISO 8601 포맷 (YYYY-MM-DDTHH:MM:SSZ) */
  static formatDateToISO(date: Date): string {
    return date.toISOString().slice(0, 19) + 'Z';
  }

  /** ✅ 타임스탬프를 ISO 8601 포맷으로 변환 */
  static formatTimeStampToISO(timeStamp: number): string {
    return DateFormatter.formatDateToISO(new Date(timeStamp));
  }
}
