import { useTranslation } from "react-i18next";

export default function LegalNotice() {
  const { t } = useTranslation();
  const CONTACT_EMAIL = "rheinemann97@icloud.com";

  return (
    <section className="mb-20">
      <h3 className="mb-4 text-2xl font-bold text-neutral-100">{t("legal.headline")}</h3>
      <div className="text-neutral-400">
        <p className="mb-4">
          {t("legal.lawParagraph")}
        </p>
        <p>Robert Heinemann</p>
        <p>{t("footer.information.address.street")}</p>
        <p>{`${t("footer.information.address.postalCode")} ${t("footer.information.address.city")}`}</p>
        <p className="mb-4">{t("footer.information.address.country")}</p>

        <h3 className="mb-4 text-2xl font-bold text-neutral-100">{t("footer.headline")}</h3>
        <p className="mb-4">
          E-Mail: <a href={`mailto:${CONTACT_EMAIL}`} className="border-b">{CONTACT_EMAIL}</a>
        </p>

        <h3 className="mb-4 text-2xl font-bold text-neutral-100">{t("legal.contentManager")}</h3>
        <p>Robert Heinemann</p>
        <p>{t("footer.information.address.street")}</p>
        <p>{`${t("footer.information.address.postalCode")} ${t("footer.information.address.city")}`}</p>
        <p className="mb-4">{t("footer.information.address.country")}</p>

        <h3 className="mb-4 text-2xl font-bold text-neutral-100">{t("legal.disputeHeadline")}</h3>
        <p className="mb-4">
          {t("legal.disputePlatform")}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="border-b">
            https://ec.europa.eu/consumers/odr/
          </a>.
        </p>
        <p className="mb-4">
          {t("legal.disputeParticipation")}
        </p>

        <p className="mb-4">{t("legal.source")} <a href="https://erecht24.de" target="_blank" className="border-b">eRecht24.de</a></p>
      </div>
    </section>
  );
}