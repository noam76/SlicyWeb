/**
 * Wichy
 * Printer Manager Definition
 *
 * Based on:
 * - ARCHITECTURE.md
 * - DATA_SCHEMA.md
 * - PRINTER_PROFILE_SPEC.md
 */

import type { Printer } from "../types/Printer";

export class PrinterManager {
  private readonly printers =
    new Map<string, Printer>();

  public addPrinter(
    printer: Printer
  ): void {
    this.printers.set(
      printer.id,
      printer
    );
  }

  public removePrinter(
    printerId: string
  ): void {
    this.printers.delete(
      printerId
    );
  }

  public getPrinter(
    printerId: string
  ): Printer | undefined {
    return this.printers.get(
      printerId
    );
  }

  public getPrinters(): Printer[] {
    return Array.from(
      this.printers.values()
    );
  }

  public hasPrinter(
    printerId: string
  ): boolean {
    return this.printers.has(
      printerId
    );
  }

  public getPrinterCount(): number {
    return this.printers.size;
  }

  public clear(): void {
    this.printers.clear();
  }
}
