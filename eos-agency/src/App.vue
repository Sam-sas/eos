<template>
    <div id="app" class="homepage">
      <BaseContact :contactInfo="contactInfoTop"></BaseContact>
      <BaseSplashArea :splashArea="splashArea"></BaseSplashArea>
      <div class="float">
        <BaseQuoteForm :quoteForm="quoteFormTop"></BaseQuoteForm>
      </div>
      <div id="processSection">
        <BaseSection :sectionInfo="processSection"></BaseSection>
      </div>
      <div id="serviceSection">
        <span  data-aos="fade-left" data-aos-delay="50">
          <BaseCard :card="serviceSection.tech"></BaseCard>
        </span>
        <span  data-aos="fade-left" data-aos-delay="200">
          <BaseCard :card="serviceSection.seo"></BaseCard>

        </span>
        <span  data-aos="fade-left" data-aos-delay="350">
          <BaseCard :card="serviceSection.social"></BaseCard>

        </span>
      </div>
      <BaseQuoteForm :quoteForm="quoteFormBottom"></BaseQuoteForm>
      <BaseContact :contactInfo="contactInfoBottom"></BaseContact>
      <BaseFooter :footerInfo="footer"></BaseFooter>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      contactInfoTop: {
        bgd: 'whiteBackground',
        logo: 'icons/eos-logo.svg',
        logoAltText: 'Eos Logo',
        phoneNum: 'Call us: 704.425.2935',
      },
      contactInfoBottom: {
        bgd: 'purpleBackground',
        logo: 'icons/eos-icon-pale.svg',
        logoAltText: 'Eos Logo',
        phoneNum: 'Call us: 704.425.2935',
      },
      splashArea: {
        mainText: 'a new dawn for your business',
        subText: 'We will grow your traffic with qualified customers. Our focus is ROI. No games, no jargon. Just results.',
        bgd: 'Purple-Orange-Sunset.svg',
        bgdFallback: 'slpash-graphic-no-bar.png',
      },
      quoteFormTop: {
        label: "Let's get started with a free review and quote",
        placeholder: 'Email Address',
        submit: 'Get Started',
        msg: 'No Commitments. We respect your privacy',
        id: 'topForm',
      },
      quoteFormBottom: {
        label: "Let's get started."
          + " We'll provide a free, no commitment consultation,"
          + ' and give youour recommendations and free quote - with no strings.',
        placeholder: 'Email Address',
        submit: 'Get Started',
        id: 'bottomForm',
        img: 'splash-graphic-faded.png',
      },
      processSection: {
        plan: {
          image: 'icons/plan-icon.svg',
          heading: '1. Set a plan',
          sellPoint: "We'll discuss your business, your needs, and your budget."
            + " We'll craft the right strategy to meet your goals.",
        },
        complete: {
          image: 'icons/sunrise-icon.svg',
          heading: '2. Get it done',
          sellPoint: "We'll take it from there."
            + ' Our experts will implement the plan from A-Z.'
            + "You won't have to worry about a thing.",
        },
        results: {
          image: 'icons/report-icon.svg',
          heading: '3. Results',
          sellPoint: "We'll keep you up to date on all the progress and results,"
            + "and you'll have 24/7 access to us if you have any questions.",
        },
      },
      serviceSection: {
        tech: {
          image: 'icons/laptop-code-solid.svg',
          heading: 'Technology',
          sellPoint: 'Beautiful, responsive websites'
            + ' Represent your brand the right way, on desktop and mobile.'
            + ' Convert your visitors into paying customers',
        },
        seo: {
          image: 'icons/thunder-search.svg',
          heading: 'Search Engines',
          sellPoint: 'Higher search rankings.'
            + ' Pay per click ads.'
            + ' A stronger web presence that brings new, qualified customers right to you.',
        },
        social: {
          image: 'icons/social-chat-icon.svg',
          heading: 'Social',
          sellPoint: 'Take advantage of one of the most powerful marketing tools available.'
            + 'We will help you reach and engage your customers via social media.',
        },
      },
      footer: {
        copyright: ' 2020 Eos Digital, All rights Reserved',
      },
    };
  },
};
</script>
