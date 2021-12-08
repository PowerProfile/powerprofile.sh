import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './legal.module.css';

function LegalHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Legal Notice</h1>
        <p className="hero__subtitle">Information in accordance with Section 5 TMG</p>
      </div>
    </header>
  );
}

export default function Legal() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Legal Notice">
      <LegalHeader />
      <main>
        <section>
          <div className="container margin-top--lg">
            <div className="row">
              <div className="col col--4"></div>
              <div className="col col--4">
                <div className="card shadow--md">
                  <div className="card__body">
                    <p>
                      Julian Pawlowski<br/>
                      Paehlstr. 6 B<br/>
                      81377 Munich<br/>
                      Germany
                    </p>
                  </div>
                  <div className="card__header margin-top--md">
                    <h5>Contact</h5>
                  </div>
                  <div className="card__body">
                    <p>
                      Phone: +49 89 420955373<br />
                      Fax: +49 32 22998662312<br />
                      Email: M@il.PowerProfile.sh
                    </p>
                  </div>
                  <div className="card__header margin-top--md">
                    <h5>Responsible for the content according to Section 55 (2) RStV</h5>
                  </div>
                  <div className="card__body">
                    <p>
                      Julian Pawlowski<br/>
                      Paehlstr. 6 B<br/>
                      81377 Munich<br/>
                      Germany
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col--4"></div>
            </div>
          </div>
        </section>
        <section>
          <div className="container margin-top--xl margin-bottom--xl">
            <div className="row">
              <div className="col col--4"></div>
              <div className="col col--4">
                <h2>Disclaimer</h2>

                <h3>Accountability for content</h3>
                <p>
                  The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents’ accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
                </p>

                <h3>Accountability for links</h3>
                <p>
                  Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.
                </p>

                <h3>Copyright</h3>
                <p>
                  Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
                </p>
              </div>
              <div className="col col--4"></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
