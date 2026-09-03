/**
 * Wichy
 * File Validator Definition
 *
 * Based on:
 * - ARCHITECTURE.md
 * - API_SPEC.md
 * - SECURITY_SPEC.md
 */

export class FileValidator {
  private readonly supportedFormats = [
    "stl",
    "3mf"
  ];

  public validate(
    file: File
  ): boolean {
    return (
      this.validateName(file) &&
      this.validateExtension(file)
    );
  }

  public validateName(
    file: File
  ): boolean {
    return file.name.trim().length > 0;
  }

  public validateExtension(
    file: File
  ): boolean {
    const extension =
      this.getFileExtension(file.name);

    return this.supportedFormats.includes(
      extension
    );
  }

  private getFileExtension(
    fileName: string
  ): string {
    const parts =
      fileName.split(".");

    return (
      parts.pop()?.toLowerCase() ??
      ""
    );
  }
}
