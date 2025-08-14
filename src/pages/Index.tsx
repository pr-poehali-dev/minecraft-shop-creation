import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const vipPackages = [
    {
      id: 1,
      name: "VIP Статус",
      price: "199₽",
      description: "Базовые привилегии для комфортной игры",
      features: ["Цветной ник", "Приватный чат", "Быстрая телепортация", "Защита от убийств"],
      image: "/img/a465be0a-1d98-4bf6-bfe7-4bf1a0ca39a2.jpg",
      badge: "ПОПУЛЯРНО"
    },
    {
      id: 2,
      name: "PREMIUM Статус",
      price: "399₽",
      description: "Расширенные возможности для серьезных игроков",
      features: ["Все привилегии VIP", "Креативный режим", "WorldEdit команды", "Персональный мир"],
      image: "/img/0427db3c-a796-4e81-8139-113295d7b582.jpg",
      badge: "ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ"
    },
    {
      id: 3,
      name: "ELITE Статус",
      price: "799₽",
      description: "Максимальные привилегии для настоящих профи",
      features: ["Все привилегии PREMIUM", "Модераторские права", "Спавн мобов", "Безлимитный инвентарь"],
      image: "/img/44660d7c-911c-49c9-aa58-03e958459059.jpg",
      badge: "ТОПОВЫЙ"
    }
  ];

  const gameItems = [
    { name: "Алмазный меч", price: "50₽", description: "Мощное оружие для PvP" },
    { name: "Незеритовая броня", price: "120₽", description: "Максимальная защита" },
    { name: "Элитры", price: "80₽", description: "Крылья для полетов" },
    { name: "Зачарованная кирка", price: "70₽", description: "Быстрая добыча ресурсов" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-2 border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-sm"></div>
              <h1 className="text-2xl font-bold pixel-font text-primary">MINECRAFT SHOP</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium">Товары</a>
              <a href="#donate" className="text-foreground hover:text-primary transition-colors font-medium">Донат</a>
              <a href="#rules" className="text-foreground hover:text-primary transition-colors font-medium">Правила</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>
            <Button className="minecraft-button bg-primary text-primary-foreground">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold pixel-font mb-6 text-primary">
            🏰 МАЙНКРАФТ СЕРВЕР
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйся к лучшему серверу! Получи донатные привилегии и стань частью элитного сообщества игроков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="minecraft-button bg-primary text-primary-foreground text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="minecraft-button">
              <Icon name="Users" size={20} className="mr-2" />
              Присоединиться к Discord
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="minecraft-card p-6 text-center">
              <Icon name="Users" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-bold text-lg">1000+ игроков</h3>
              <p className="text-muted-foreground">Активное сообщество</p>
            </div>
            <div className="minecraft-card p-6 text-center">
              <Icon name="Zap" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-bold text-lg">24/7 онлайн</h3>
              <p className="text-muted-foreground">Стабильная работа</p>
            </div>
            <div className="minecraft-card p-6 text-center">
              <Icon name="Shield" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-bold text-lg">Анти-грифинг</h3>
              <p className="text-muted-foreground">Защита построек</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Packages */}
      <section id="donate" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold pixel-font mb-4 text-primary">💎 ДОНАТНЫЕ СТАТУСЫ</h2>
            <p className="text-lg text-muted-foreground">Получи уникальные привилегии и стань VIP игроком!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vipPackages.map((pkg) => (
              <Card key={pkg.id} className="minecraft-card relative overflow-hidden">
                {pkg.badge && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground z-10">
                    {pkg.badge}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <img src={pkg.image} alt={pkg.name} className="w-16 h-16 mx-auto mb-4 pixelated" />
                  <CardTitle className="text-2xl pixel-font">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full minecraft-button bg-primary text-primary-foreground">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить статус
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Items */}
      <section id="shop" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold pixel-font mb-4 text-primary">⚔️ ИГРОВЫЕ ПРЕДМЕТЫ</h2>
            <p className="text-lg text-muted-foreground">Прокачай свой инвентарь!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameItems.map((item, index) => (
              <Card key={index} className="minecraft-card">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-sm mx-auto mb-3"></div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col gap-3">
                  <div className="text-xl font-bold text-primary">{item.price}</div>
                  <Button className="w-full minecraft-button bg-primary text-primary-foreground">
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Info */}
      <section id="rules" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold pixel-font mb-4 text-primary">📋 ПРАВИЛА И ИНФОРМАЦИЯ</h2>
          </div>
          
          <Tabs defaultValue="rules" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="rules">Правила</TabsTrigger>
              <TabsTrigger value="info">Информация</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rules" className="mt-8">
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="pixel-font">Основные правила сервера</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">1</Badge>
                    <div>
                      <h4 className="font-semibold">Не гриферь!</h4>
                      <p className="text-muted-foreground">Запрещено ломать постройки других игроков</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">2</Badge>
                    <div>
                      <h4 className="font-semibold">Будь вежлив</h4>
                      <p className="text-muted-foreground">Оскорбления и мат в чате запрещены</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">3</Badge>
                    <div>
                      <h4 className="font-semibold">Никаких читов</h4>
                      <p className="text-muted-foreground">Использование модов и читов ведет к бану</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="info" className="mt-8">
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="pixel-font">Информация о сервере</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Технические характеристики</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Версия: 1.20.4</li>
                        <li>• Режим: Survival + Creative</li>
                        <li>• Слоты: 1000 игроков</li>
                        <li>• Аптайм: 99.9%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Особенности</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Экономика и магазины</li>
                        <li>• Кланы и войны</li>
                        <li>• Мини-игры</li>
                        <li>• Ежедневные квесты</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faq" className="mt-8">
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="pixel-font">Частые вопросы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Как зайти на сервер?</h4>
                    <p className="text-muted-foreground">IP: play.minecraft-server.ru</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Можно ли вернуть донат?</h4>
                    <p className="text-muted-foreground">Возврат доната возможен в течение 24 часов</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Есть ли мобильная версия?</h4>
                    <p className="text-muted-foreground">Да, сервер поддерживает Minecraft PE</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold pixel-font mb-4 text-primary">📞 КОНТАКТЫ</h2>
            <p className="text-lg text-muted-foreground">Связаться с администрацией</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="minecraft-card text-center">
              <CardHeader>
                <Icon name="MessageCircle" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle>Discord</CardTitle>
                <CardDescription>Основной канал связи</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full minecraft-button bg-primary text-primary-foreground">
                  Присоединиться
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="minecraft-card text-center">
              <CardHeader>
                <Icon name="Send" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle>Telegram</CardTitle>
                <CardDescription>Новости и обновления</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full minecraft-button bg-primary text-primary-foreground">
                  Подписаться
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="minecraft-card text-center">
              <CardHeader>
                <Icon name="Mail" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle>Email</CardTitle>
                <CardDescription>admin@minecraft-server.ru</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full minecraft-button bg-primary text-primary-foreground">
                  Написать
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-sm"></div>
            <h3 className="font-bold pixel-font text-primary">MINECRAFT SHOP</h3>
          </div>
          <p className="text-muted-foreground">© 2024 Minecraft Server. Все права защищены.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Не является официальным продуктом Minecraft. Не одобрено и не связано с Mojang.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;