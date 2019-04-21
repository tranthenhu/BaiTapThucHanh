<?php

use Illuminate\Database\Seeder;

class congiap extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('conGiap')->insert([
            [ 'name' => 'Pisces', 'detail'=> 'Hành tinh cai trị của họ là Sao Hải Vương, vì vậy Song Ngư có trực giác hơn những người khác và có tài năng nghệ thuật. Sao Hải Vương được kết nối với âm nhạc, vì vậy Song Ngư tiết lộ sở thích âm nhạc trong giai đoạn sớm nhất của cuộc đời. Họ hào phóng, từ bi và cực kỳ trung thành và chu đáo.','image'=>'https://thumbs.dreamstime.com/z/neon-signs-zodiac-pisces-series-made-art-black-background-constellations-78605130.jpg'],
            [ 'name' => 'Aries', 'detail'=> 'Bạch Dương tượng trưng cho sự hy sinh và chung thủy. Những loài thú sinh nở nhiều trong khoảng thời gian vầng mặt trời ngự ở tuổi này. Dấu hiệu của tuổi Bạch Dương là con cừu đực. Cừu cũng tượng trưng cho mùa xuân, mùa mà nhân loại được ban phát tình yêu ánh sáng qua biểu tượng là mặt trời. Cung này tượng trưng cho bộ óc của Vũ trụ.','image'=>'https://st3.depositphotos.com/3804071/13434/v/1600/depositphotos_134349102-stock-illustration-neon-horoscope-circle-with-signs.jpg'],
            [ 'name' => 'Taurus', 'detail'=> 'Kim Ngưu là một dấu hiệu Trái đất , giống như Xử Nữ và Ma Kết , và có khả năng nhìn mọi thứ từ góc độ căn bản, thực tế và thực tế. Họ thấy dễ dàng kiếm tiền và ở cùng một dự án trong nhiều năm hoặc cho đến khi hoàn thành. Những gì chúng ta thường thấy là sự bướng bỉnh có thể được hiểu là sự cam kết và khả năng của họ để hoàn thành nhiệm vụ bất cứ điều gì cần là kỳ lạ.','image'=>'https://st3.depositphotos.com/3804071/13434/v/1600/depositphotos_134349248-stock-illustration-neon-horoscope-circle-with-signs.jpg'],
            [ 'name' => 'Gemini', 'detail'=> 'Những người thuộc cung Song Tử có một trí nhớ, bộ não tuyệt vời. Họ có thể chứa đựng trong đầu mình một lượng thông tin khổng lồ. Họ luôn có điều để bận tâm và muốn nói ra thật nhiều những suy nghĩ của mình, vì vậy đôi khi mọi người xung quanh cảm thấy họ rất luyên thuyên','image'=>'https://st3.depositphotos.com/3804071/13434/v/1600/depositphotos_134349158-stock-illustration-neon-horoscope-circle-with-signs.jpg'],
            [ 'name' => 'Cancer', 'detail'=> 'Trực quan sâu sắc và tình cảm, Cự Giải có thể là một trong những cung hoàng đạo thử thách nhất để làm quen. Họ rất tình cảm và nhạy cảm, và quan tâm sâu sắc đến các vấn đề của gia đình và nhà của họ. Cự Giải rất thông cảm và gắn bó với những người mà họ giữ gần gũi.','image'=>'https://st3.depositphotos.com/3804071/13434/v/1600/depositphotos_134349222-stock-illustration-neon-horoscope-circle-with-signs.jpg'],
            [ 'name' => 'Leo', 'detail'=> 'Những người sinh ra dưới dấu hiệu của Leo là những nhà lãnh đạo bẩm sinh. Họ kịch tính, sáng tạo, tự tin, nổi trội và cực kỳ khó cưỡng, có thể đạt được bất cứ điều gì họ muốn trong bất kỳ lĩnh vực nào của cuộc sống mà họ cam kết.','image'=>'https://st3.depositphotos.com/3804071/13434/v/1600/depositphotos_134349176-stock-illustration-neon-horoscope-circle-with-signs.jpg'],
            [ 'name' => 'Virgo', 'detail'=> 'Virgos luôn chú ý đến những chi tiết nhỏ nhất và ý thức sâu sắc về con người của họ khiến họ trở thành một trong những dấu hiệu cẩn thận nhất của cung hoàng đạo. Phương pháp tiếp cận phương pháp của họ đối với cuộc sống đảm bảo rằng không còn gì để có cơ hội, và mặc dù họ thường dịu dàng, trái tim của họ có thể bị đóng cửa đối với thế giới bên ngoài.','image'=>'https://image.shutterstock.com/z/stock-vector-neon-signs-of-the-zodiac-virgo-189441392.jpg'],
            [ 'name' => 'Libra', 'detail'=> 'Những người sinh ra dưới dấu hiệu của Thiên Bình là hòa bình, công bằng và họ ghét ở một mình. Quan hệ đối tác là rất quan trọng đối với họ, vì tấm gương của họ và ai đó cho họ khả năng trở thành tấm gương.','image'=>'https://freedesignfile.com/upload/2016/10/Libra-neon-sign-vector-material.jpg'],
            [ 'name' => 'Scorpio', 'detail'=> 'Bọ Cạp sinh ra là những người đam mê và quyết đoán. Họ quyết tâm và quyết đoán, và sẽ nghiên cứu cho đến khi họ tìm ra sự thật. Bọ Cạp là một nhà lãnh đạo tuyệt vời, luôn nhận thức được tình huống và cũng nổi bật về sự tháo vát.','image'=>'https://image.shutterstock.com/image-vector/neon-signs-zodiac-scorpio-450w-189441398.jpg'],
            [ 'name' => 'sagittarius', 'detail'=> 'Tò mò và hoạt bát, Nhân Mã là một trong những khách du lịch lớn nhất trong số tất cả các cung hoàng đạo. Tâm trí cởi mở và quan điểm triết học của họ thúc đẩy họ đi lang thang khắp thế giới để tìm kiếm ý nghĩa của cuộc sống.','image'=>'https://thumbs.dreamstime.com/z/neon-signs-zodiac-sagittarius-series-made-art-black-background-constellations-78604908.jpg'],
            [ 'name' => 'Capricorn', 'detail'=> 'Ma Kết là một dấu hiệu đại diện cho thời gian và trách nhiệm, và đại diện của nó là truyền thống và thường rất nghiêm túc. Những cá nhân này có một trạng thái độc lập bên trong cho phép tiến bộ đáng kể cả trong cuộc sống cá nhân và nghề nghiệp của họ','image'=>'https://image.shutterstock.com/z/stock-vector-neon-signs-of-the-zodiac-capricorn-189441383.jpg'],
            [ 'name' => 'Aquarius ', 'detail'=> 'Sinh ra là Bảo Bình nhút nhát và ít nói, nhưng mặt khác họ có thể lập dị và tràn đầy năng lượng. Tuy nhiên, trong cả hai trường hợp, họ là những người suy nghĩ sâu sắc và những người có trí tuệ cao, thích giúp đỡ người khác. Họ có thể nhìn mà không có thành kiến, ở cả hai phía, điều này khiến họ trở thành những người có thể dễ dàng giải quyết vấn đề.','image'=>'https://thumbs.dreamstime.com/z/neon-signs-zodiac-aquarius-series-made-art-black-background-constellations-78605143.jpg'],



        ]); 
    }
}
