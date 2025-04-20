import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Video, Book, Users, Headphones, Calendar, ArrowRight } from "lucide-react";

// FAQ questions and answers
const faqs = [{
  question: "На каком языке проходит программа?",
  answer: "Программа проводится полностью на английском языке, включая все учебные материалы, групповые встречи и индивидуальные консультации."
}, {
  question: "Можно ли присоединиться позже?",
  answer: "К сожалению, присоединение после начала программы не предусмотрено, так как модули последовательны и каждый базируется на предыдущем."
}, {
  question: "Сколько человек в группе?",
  answer: "Групповые занятия проводятся в мини-группах до 3-4 человек, что обеспечивает достаточное внимание ментора каждому участнику."
}, {
  question: "Какие требования к уровню английского?",
  answer: "Для комфортного участия в программе рекомендуется уровень английского не ниже Intermediate (B1). Этот уровень позволит активно участвовать в обсуждениях и выполнять практические задания."
}];

// Course modules
const courseModules = [{
  title: "Модуль 1: Поведенческие интервью",
  duration: "2 занятия",
  items: [
    "1: Теория и тренировка простых вопросов + домашка (elevator pitch и частые вопросы)",
    "2: Практика сложных вопросов в группе + домашка (стратегии и миссии компаний)"
  ]
}, {
  title: "Модуль 2: Product Sense",
  duration: "3 занятия",
  items: [
    "1: Сегменты и гипотезы боли, приоритезация",
    "2: Гипотезы решений, метрики, MVP, риски",
    "3: Разбор простого кейса + письменный разбор кейсов"
  ]
}, {
  title: "Модуль 3: Product Execution",
  duration: "5–7 занятий",
  items: [
    "1: Поиск NSM + домашка (20 продуктов)",
    "2: Целевые и указательные метрики",
    "3: Контр-метрики и трейд-оффы",
    "4–5: Кейс Metrics & Success Measurement",
    "6: Debugging / Root Cause Analysis",
    "7: Разбор сложного кейса + устная защита с таймером"
  ]
}];

// Format features
const formatFeatures = [{
  title: "Теория",
  icon: <Video className="w-6 h-6" />,
  description: "Видеоматериалы для самостоятельного изучения"
}, {
  title: "Групповые встречи",
  icon: <Users className="w-6 h-6" />,
  description: "1 раз в неделю с ментором, до 3-4 человек"
}, {
  title: "1-to-1 сессии",
  icon: <Headphones className="w-6 h-6" />,
  description: "Индивидуальные консультации по запросу"
}, {
  title: "Язык обучения",
  icon: <Book className="w-6 h-6" />,
  description: "Все материалы и общение на английском языке"
}];

// Target audience
const targetAudience = [{
  title: "Продакт-менеджеры",
  description: "Специалисты, стремящиеся выйти на европейский рынок труда"
}, {
  title: "Международная карьера",
  description: "Профессионалы, нацеленные на построение карьеры в международных компаниях"
}, {
  title: "Развитие навыков",
  description: "Те, кто хочет улучшить навыки прохождения интервью и execution-навыки на английском языке"
}];

export default function Index() {
  const consultationLink = "https://t.me/KriGuseva";
  return <div className="font-roboto min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-purple-100/50 to-white pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <AnimatedReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              EU Career Prep for Product Managers
            </h1>
          </AnimatedReveal>
          
          <AnimatedReveal delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 text-center mb-10 max-w-3xl mx-auto">
              Карьерная стратегия, интервью и продакт-скиллы для выхода на рынок Европы. 
              Программа на английском языке.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <div className="flex justify-center bg-zinc-400">
              <CTAButton href={consultationLink} className="text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Записаться на консультацию
              </CTAButton>
            </div>
          </AnimatedReveal>
        </div>
      </Section>

      {/* Overview Section */}
      <Section className="bg-white">
        <AnimatedReveal>
          <SectionHeading>О программе</SectionHeading>
        </AnimatedReveal>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedReveal delay={0.1}>
            <Card className="p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="font-bold text-xl mb-4 text-purple-DEFAULT">Фокус программы</h3>
              <p className="text-gray-700">
                Комплексная подготовка продакт-менеджеров к выходу на европейский рынок через 
                развитие ключевых навыков и отработку стратегий прохождения интервью.
              </p>
            </Card>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <Card className="p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="font-bold text-xl mb-4 text-purple-DEFAULT">Карьерная стратегия</h3>
              <p className="text-gray-700">
                Разработка индивидуальной карьерной стратегии, включающей подготовку к собеседованиям, 
                адаптацию резюме и развитие профессиона��ьных навыков для европейского рынка.
              </p>
            </Card>
          </AnimatedReveal>

          <AnimatedReveal delay={0.3}>
            <Card className="p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="font-bold text-xl mb-4 text-purple-DEFAULT">Формат занятий</h3>
              <p className="text-gray-700">
                Сбалансированное сочетание теории (видеоматериалы), групповых занятий с ментором 
                (3-4 человека) и индивидуальных сессий с партнером для максимальной эффективности обучения.
              </p>
            </Card>
          </AnimatedReveal>

          <AnimatedReveal delay={0.4}>
            <Card className="p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="font-bold text-xl mb-4 text-purple-DEFAULT">Расширенные возможности</h3>
              <p className="text-gray-700">
                Возможность расширить программу через индивидуальную работу с ментором для более 
                глубокого погружения в материал и персонализированной обратной связи.
              </p>
            </Card>
          </AnimatedReveal>
        </div>
      </Section>

      {/* Format Section */}
      <Section className="bg-gray-50">
        <AnimatedReveal>
          <SectionHeading>Формат обучения</SectionHeading>
        </AnimatedReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formatFeatures.map((feature, index) => <AnimatedReveal key={feature.title} delay={0.1 * (index + 1)}>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all h-full flex flex-col items-center">
                <div className="rounded-full bg-purple-100 p-4 mb-4 inline-flex">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimatedReveal>)}
        </div>
      </Section>

      {/* Course Program Section */}
      <Section className="bg-white">
        <AnimatedReveal>
          <SectionHeading>Программа курса</SectionHeading>
        </AnimatedReveal>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {courseModules.map((module, index) => <AnimatedReveal key={module.title} delay={0.1 * (index + 1)}>
              <Card className="overflow-hidden border border-gray-200">
                <div className="bg-purple-DEFAULT p-4 text-white">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg md:text-xl">{module.title}</h3>
                    <span className="bg-white text-purple-DEFAULT text-sm rounded px-2 py-1 font-medium">
                      {module.duration}
                    </span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <ul className="space-y-2">
                    {module.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-purple-DEFAULT mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </Card>
            </AnimatedReveal>)}
        </div>
      </Section>

      {/* Upgrades Section */}
      <Section className="bg-purple-100/50">
        <AnimatedReveal>
          <SectionHeading>Апгрейды и дополнительные услуги</SectionHeading>
        </AnimatedReveal>
        
        <AnimatedReveal delay={0.1}>
          <Card className="max-w-4xl mx-auto p-8 border-2 border-purple-light/20 shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-purple-DEFAULT mb-4">Индивидуальная работа с ментором</h3>
              <p className="text-lg text-gray-700 mb-6">
                Углубленные персональные консультации для детальной проработки навыков и подготовки к интервью с учетом ваших индивидуальных потребностей.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="bg-purple-100 rounded-lg px-4 py-2 text-purple-dark font-medium">
                  Возможность апгрейдить в любой момент
                </div>
                <div className="bg-purple-100 rounded-lg px-4 py-2 text-purple-dark font-medium">
                  Отдельная стоимость
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <CTAButton href={consultationLink} className="shadow-md">
                Узнать подробности
              </CTAButton>
            </div>
          </Card>
        </AnimatedReveal>
      </Section>

      {/* Target Audience Section */}
      <Section className="bg-white">
        <AnimatedReveal>
          <SectionHeading>Для кого программа</SectionHeading>
        </AnimatedReveal>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {targetAudience.map((item, index) => <AnimatedReveal key={item.title} delay={0.1 * (index + 1)}>
              <Card className="p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 h-full">
                <h3 className="font-bold text-xl mb-3 text-purple-DEFAULT">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </AnimatedReveal>)}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <AnimatedReveal>
          <SectionHeading>Часто задаваемые вопросы</SectionHeading>
        </AnimatedReveal>
        
        <AnimatedReveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="divide-y divide-gray-200">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="py-4 text-left font-medium text-lg hover:text-purple-DEFAULT hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </AnimatedReveal>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-gradient-to-br from-purple-DEFAULT/10 to-purple-light/5">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать свой путь к европейской карьере?</h2>
          </AnimatedReveal>
          
          <AnimatedReveal delay={0.1}>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию и узнайте, как программа может помочь вам достичь ваших карьерных целей.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <CTAButton href={consultationLink} className="text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Записаться на консультацию
            </CTAButton>
          </AnimatedReveal>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">EU Career Prep for Product Managers</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Все права защищены</p>
        </div>
      </footer>
    </div>;
}
