import { useTranslation } from "react-i18next";
import { socialMediaIcons } from "../../config/icons";

function MapAndContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="page py-10 lg:py-20 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="overflow-hidden flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23411.176036473382!2d74.59697851083983!3d42.82222700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb5d3e7906179%3A0x616a2e518d03e933!2s7%D0%B0%2C%201%20Sayakbay%20Karalaev%20St%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1717356369877!5m2!1sen!2skg"
              title="Location of Light Academy College in Bishkek, Kyrgyzstan"
              width="600"
              height="450"
              allow="fullscreen"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          <div>
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-slate-900">
                  {t("home.contactSection.address.title")}
                </h3>
                <p className="mt-1 text-slate-600">
                  <a
                    href="https://2gis.kg/bishkek/inside/70030076373364328/firm/70000001089690237"
                    className="text-blue-700 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("home.contactSection.address.content")}
                  </a>
                </p>
              </div>
              <div className="border-t border-slate-200 px-6 py-4">
                <h3 className="text-lg font-medium text-slate-900">
                  {t("home.contactSection.hours.title")}
                </h3>
                <p className="mt-1 text-slate-600">
                  {t("home.contactSection.hours.content.mondayToFriday")}
                </p>
                <p className="mt-1 text-slate-600">
                  {t("home.contactSection.hours.content.weekend")}
                </p>
              </div>
              <div className="border-t border-slate-200 px-6 py-4">
                <h3 className="text-lg font-medium text-slate-900">
                  {t("home.contactSection.contact")}
                </h3>
                <div className="flex flex-col">
                  {/* Email */}
                  <article className="mt-1 text-slate-600">
                    <a
                      href="mailto:info@college.edu.kg"
                      className="flex justify-start items-center gap-2"
                    >
                      <span className="text-slate-700 w-8 h-8 flex justify-center items-center">
                        {socialMediaIcons.email}
                      </span>
                      <span>info@college.edu.kg</span>
                    </a>
                  </article>

                  {/* Phone Numbers */}
                  <article className="mt-1 text-slate-600 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-2">
                    <a
                      href="https://t.me/+996226142222"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-center items-center gap-2">
                        <span className="text-slate-700 w-8 h-8 flex justify-center items-center">
                          {socialMediaIcons.telegram}
                        </span>
                        <span>+996 226 14 22 22</span>
                      </div>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=996226142222"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-center items-center gap-2">
                        <span className="text-slate-700 w-8 h-8 flex justify-center items-center">
                          {socialMediaIcons.whatsapp}
                        </span>
                        <span>+996 226 14 22 22</span>
                      </div>
                    </a>
                  </article>

                  <article className="mt-1 text-slate-600 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-2">
                    <div
                      itemScope
                      itemType="https://schema.org/WebPage"
                      className="flex justify-center items-center gap-2"
                    >
                      <span className="text-slate-700 w-8 h-8 flex justify-center items-center">
                        {socialMediaIcons.phone}
                      </span>
                      <span itemProp="telephone">
                        <a
                          href="tel:+996226142222"
                          className="text-slate-700"
                          aria-label="Call Light Academy College"
                        >
                          +996 226 14 22 22
                        </a>
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapAndContactInfo;
