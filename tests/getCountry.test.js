import fs from "fs";
import path from "path";
import getCountry from "../src/getCountry";

describe("getCountry", () => {
  it("returns correct country data for CA", () => {
    const result = getCountry("ca");

    expect(result).toEqual({
      code: "CA",
      name: "Canada",
      division_common_name: "Province",
      divisions: {
        AB: "Alberta",
        BC: "British Columbia",
        MB: "Manitoba",
        NB: "New Brunswick",
        NL: "Newfoundland and Labrador",
        NS: "Nova Scotia",
        NT: "Northwest Territories",
        NU: "Nunavut",
        ON: "Ontario",
        PE: "Prince Edward Island",
        QC: "Quebec",
        SK: "Saskatchewan",
        YT: "Yukon",
      },
      postal_codes: true,
      postal_codes_common_name: "Postal code",
    });
  });

  it("returns correct country data for HK", () => {
    const result = getCountry("hk");

    // Expecting the provided Hong Kong data
    expect(result).toEqual({
      code: "HK",
      name: "Hong Kong",
      division_common_name: "Region",
      divisions: {
        HK: "Hong Kong Island",
        KL: "Kowloon",
        NT: "New Territories",
      },
      postal_codes: false,
    });
  });

  it("throws error for invalid code", () => {
    expect(() => getCountry("xx")).toThrow();
  });
});

describe("data files schema", () => {
  const dataDirPath = path.join(__dirname, "../data");
  const dataFiles = fs.readdirSync(dataDirPath);

  dataFiles.forEach((file) => {
    if (path.extname(file) === ".json") {
      it(`validates schema for ${file}`, () => {
        const data = getCountry(path.basename(file, ".json"));

        // check if required keys exist
        expect(data).toHaveProperty("code");
        expect(data).toHaveProperty("name");
        expect(data).toHaveProperty("postal_codes");

        // check the required key types
        expect(typeof data.code).toBe("string");
        expect(typeof data.name).toBe("string");
        expect(typeof data.postal_codes).toBe("boolean");

        // check optional string keys
        ["division_common_name"].forEach((key) => {
          if (data.hasOwnProperty(key)) {
            expect(typeof data[key]).toBe("string");
          }
        });

        // check optional object keys
        ["divisions"].forEach((key) => {
          if (data.hasOwnProperty(key)) {
            expect(typeof data[key]).toBe("object");
          }
        });
      });
    }
  });
});
