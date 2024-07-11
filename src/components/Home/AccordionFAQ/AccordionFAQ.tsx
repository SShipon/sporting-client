import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFAQ() {
  return (
       <div className="mt-10">
        <div className=" w-full mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="lg:text-2xl text-1xl text-base text-justify ">The History and Evolution of Cricket?</AccordionTrigger>
            <AccordionContent className="border-l-4 border-rose-500 p-4 mb-4 text-base">
            Cricket, a bat-and-ball game that originated in England, has evolved significantly since its inception in the 16th century. Initially played by children, it gained popularity among adults and became a national sport in England by the 18th century. The introduction of Test cricket in 1877 marked the beginning of international competitions. Over the years, the game has seen the addition of One Day Internationals (ODIs) and Twenty20 (T20) formats, making it more exciting and fast-paced. Today, cricket is played and loved by millions around the world, with major tournaments like the ICC World Cup drawing global attention.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="lg:text-2xl text-1xl text-base text-justify">The Global Phenomenon of Football?</AccordionTrigger>
            <AccordionContent className="border-l-4 border-rose-500 p-4 mb-4 text-base">
            Football, known as soccer in some countries, is the world's most popular sport. Originating from ancient ball games played in different cultures, modern football took shape in England in the mid-19th century. The establishment of the Football Association in 1863 standardized the rules, leading to the rapid spread of the game across the globe. With events like the FIFA World Cup and UEFA Champions League, football unites fans worldwide, transcending cultural and geographical boundaries. The sport's simplicity, accessibility, and thrilling nature contribute to its unparalleled global appeal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="lg:text-2xl text-1xl text-base text-justify">The Speed and Skill of Badminton?</AccordionTrigger>
            <AccordionContent className="border-l-4 border-rose-500 p-4 mb-4 text-base">
            Badminton, a racquet sport played with a shuttlecock, has a rich history dating back to ancient civilizations in Greece, China, and India. The modern game, however, was developed in British India and gained popularity in England in the late 19th century. Known for its fast-paced and high-intensity rallies, badminton requires agility, precision, and strategic thinking. The sport is particularly popular in Asia, with countries like China, Indonesia, and Malaysia producing world-class players. Badminton's inclusion in the Olympic Games since 1992 has further elevated its status on the international stage.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="lg:text-2xl text-1xl text-base text-justify">The Grand Slam Glory of Tennis?</AccordionTrigger>
            <AccordionContent className="border-l-4 border-rose-500 p-4 mb-4 text-base">
            Tennis, a sport with roots tracing back to 12th-century France, has evolved into a globally celebrated game. The modern form of tennis began in the late 19th century in England, with the first Wimbledon Championship held in 1877. Tennis is known for its prestigious Grand Slam tournaments: the Australian Open, French Open, Wimbledon, and US Open. These events showcase the sport's top talents and provide thrilling matches that captivate audiences worldwide. With its blend of power, finesse, and endurance, tennis continues to attract millions of players and fans.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="lg:text-2xl text-1xl text-base text-justify">The Rise and Impact of Basketball?</AccordionTrigger>
            <AccordionContent className="border-l-4 border-rose-500 p-4 mb-4 text-base">
            Basketball, invented by Dr. James Naismith in 1891 in Springfield, Massachusetts, has grown into one of the most popular sports globally. Originally designed as an indoor activity to keep athletes fit during winter, the sport quickly gained popularity. The establishment of the NBA in 1946 revolutionized basketball, turning it into a major professional sport. With iconic players like Michael Jordan, Magic Johnson, and LeBron James, basketball has a massive following. The sport's fast pace, high scores, and dynamic plays make it a favorite among fans and players alike.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="lg:text-2xl text-1xl text-base text-justify">The Team Dynamics of Volleyball?</AccordionTrigger>
            <AccordionContent className="border-l-4 border-rose-500 p-4 mb-4 text-base">
            Volleyball, invented in 1895 by William G. Morgan in Massachusetts, was initially designed as a less physically demanding alternative to basketball. Over time, it developed into a highly competitive and popular sport. Played both indoors and on the beach, volleyball requires teamwork, communication, and precise execution of skills. The sport gained international recognition and was included in the Olympic Games in 1964. Today, volleyball is enjoyed by millions worldwide, with major tournaments and leagues showcasing the athleticism and coordination of top players and teams.
            </AccordionContent>
          </AccordionItem>
  
        </Accordion>
        </div>
        </div>
  );
}
