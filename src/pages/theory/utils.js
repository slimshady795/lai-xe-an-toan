const generateImg = (src = '') => `${src}?t=${new Date().getTime()}`

export const THEORY_QUESTIONS = [
    {
        title: "Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
        explanation: "Phần đường xe chạy là phần của đường bộ được sử dụng cho phương tiện giao thông qua lại.",
        answers: [
            "Phần mặt đường và lề đường.",
            "Phần đường xe chạy.",
            "Phần đường xe cơ giới."
        ],
        correctIdx: 1
    }, {
        title: "\"Làn đường\" là gì?",
        explanation: "Làn đường có bề rộng đủ cho xe chạy an toàn.",
        answers: [
            "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
            "Là đường cho xe ô tô chạy, dừng, đỗ an toàn."
        ],
        correctIdx: 1
    }, {
        title: "Khái niệm \"Khổ giới hạn của đường bộ\" được hiểu như thế nào là đúng?",
        explanation: "Khổ giới hạn đường bộ có giới hạn về chiều cao, chiều rộng.",
        answers: [
            "Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
            "Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
            "Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn."
        ],
        correctIdx: 0
    }, {
        title: "Trong các khái niệm dưới đây, \"dải phân cách\" được hiểu như thế nào là đúng?",
        explanation: "Dải phân cách phân chia mặt đường thành hai chiều xe chạy riêng biệt.",
        answers: [
            "Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép.",
            "Là bộ phận của đường để phân tách phần đường xe chạy và hành lang an toàn giao thông.",
            "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ."
        ],
        correctIdx: 2
    }, {
        title: "\"Dải phân cách\" trên đường bộ gồm những loại nào?",
        explanation: "Dải phân cách gồm cố định và di động.",
        answers: [
            "Dải phân cách gồm loại cố định và loại di động.",
            "Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm.",
            "Dải phân cách gồm giá long môn và biển báo hiệu đường bộ."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
        explanation: "Người lái xe là người điều khiển xe cơ giới.",
        answers: [
            "Là người điều khiển xe cơ giới.",
            "Là người điều khiển xe thô sơ.",
            "Là người điều khiển xe có súc vật kéo."
        ],
        correctIdx: 0
    }, {
        title: "Đường mà trên đó phương tiện tham gia giao thông được các phương tiện giao thông đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên là loại đường gì?",
        explanation: "Đường ưu tiên được nhường đường khi qua nơi giao nhau.",
        answers: [
            "Đường không ưu tiên.",
            "Đường tỉnh lộ.",
            "Đường quốc lộ.",
            "Đường ưu tiên."
        ],
        correctIdx: 3
    }, {
        title: "Khái niệm \"phương tiện giao thông cơ giới đường bộ\" được hiểu thế nào là đúng?",
        explanation: "Phương tiện giao thông cơ giới không có xe máy chuyên dùng.",
        answers: [
            "Gồm xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
            "Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo; xe mô tô hai bánh; xe mô tô ba bánh, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự."
        ],
        correctIdx: 1
    }, {
        title: "Khái niệm \"phương tiện giao thông thô sơ đường bộ\" được hiểu thế nào là đúng?",
        explanation: "Phương tiện giao thông thô sơ không có xe máy chuyên dùng; xe ô tô.",
        answers: [
            "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự.",
            "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
            "Gồm xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo."
        ],
        correctIdx: 0
    }, {
        title: "\"Phương tiện tham gia giao thông đường bộ\" gồm những loại nào?",
        explanation: "Phương tiện giao thông gồm tất cả các loại phương tiện.",
        answers: [
            "Phương tiện giao thông cơ giới đường bộ.",
            "Phương tiện giao thông thô sơ đường bộ và xe máy chuyên dùng.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "\"Người tham gia giao thông đường bộ\" gồm những đối tượng nào?",
        explanation: "Người tham gia giao thông gồm người sử dụng phương tiện và người đi bộ.",
        answers: [
            "Người điều khiển, người sử dụng phương tiện tham gia giao thông đường bộ.",
            "Người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "\"Người điều khiển phương tiện tham gia giao thông đường bộ\" gồm những đối tượng nào dưới đây?",
        explanation: "Người điều khiển phương tiện gồm cả xe cơ giới và xe máy chuyên dùng.",
        answers: [
            "Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
            "Người điều khiển xe máy chuyên dùng tham gia giao thông đường bộ.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Khái niệm \"người điều khiển giao thông\" được hiểu như thế nào là đúng?",
        explanation: "Người điều khiển giao thông là cảnh sát giao thông.",
        answers: [
            "Là người điều khiển phương tiện tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
            "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
            "Là người tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt."
        ],
        correctIdx: 1
    }, {
        title: "Trong các khái niệm dưới đây, khái niệm \"dừng xe\" được hiểu như thế nào là đúng?",
        explanation: "Dừng xe là đứng yên tạm thời.",
        answers: [
            "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian để cho người lên, xuống phương tiện; xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
            "Là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện; xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
            "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách."
        ],
        correctIdx: 1
    }, {
        title: "Khái niệm \"đỗ xe\" được hiểu như thế nào là đúng?",
        explanation: "Đỗ xe là đứng yên không giới hạn thời gian.",
        answers: [
            "Là trạng thái đứng yên của phương tiện giao thông có giới hạn trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện đó; xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
            "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian."
        ],
        correctIdx: 1
    }, {
        title: "Khái niệm \"đường cao tốc\" được hiểu như thế nào là đúng?",
        explanation: "Đường cao tốc gồm tất cả các ý.",
        answers: [
            "Đường dành riêng cho xe ô tô và một số loại xe chuyên dùng được phép đi vào theo quy định của Luật Giao thông đường bộ.",
            "Có dải phân cách phân chia đường cho xe chạy hai chiều riêng biệt mà dải phân cách này xe không được đi lên trên; không giao nhau cùng mức với một hoặc một số đường khác.",
            "Được bố trí đầy đủ trang thiết bị phục vụ, bảo đảm giao thông liên tục, an toàn, rút ngắn thời gian hành trình và chỉ cho xe ra, vào ở những điểm nhất định.",
            "Tất cả các ý trên."
        ],
        correctIdx: 3
    }, {
        title: "Hành vi nào dưới đây bị nghiêm cấm?",
        explanation: "Hành vi làm hỏng cọc tiêu bị nghiêm cấm.",
        answers: [
            "Đỗ xe trên đường phố.",
            "Sử dụng xe đạp đi trên các tuyến quốc lộ có tốc độ cao.",
            "Làm hỏng (cố ý) cọc tiêu, gương cầu, dải phân cách.",
            "Sử dụng còi và quay đầu xe trong khu dân cư."
        ],
        correctIdx: 2
    }, {
        title: "Hành vi đưa xe cơ giới, xe máy chuyên dùng không bảo đảm tiêu chuẩn an toàn kỹ thuật và bảo vệ môi trường vào tham gia giao thông đường bộ có bị nghiêm cấm hay không?",
        explanation: "Hành vi đưa xe không đảm bảo an toàn kỹ thuật bị nghiêm cấm.",
        answers: [
            "Không nghiêm cấm.",
            "Bị nghiêm cấm.",
            "Bị nghiêm cấm tùy theo các tuyến đường.",
            "Bị nghiêm cấm tùy theo loại xe."
        ],
        correctIdx: 1
    }, {
        title: "Cuộc đua xe chỉ được thực hiện khi nào?",
        explanation: "Cuộc đua xe cần cấp phép.",
        answers: [
            "Diễn ra trên đường phố không có người qua lại.",
            "Được người dân ủng hộ.",
            "Được cơ quan có thẩm quyền cấp phép."
        ],
        correctIdx: 2
    }, {
        title: "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
        explanation: "Có ma túy bị nghiêm cấm.",
        answers: [
            "Bị nghiêm cấm.",
            "Không bị nghiêm cấm.",
            "Không bị nghiêm cấm, nếu có chất ma túy ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
        ],
        correctIdx: 0
    }, {
        title: "Việc lái xe mô tô, ô tô, máy kéo ngay sau khi uống rượu, bia có được phép hay không?",
        explanation: "Uống rượu bia không được lái xe,",
        answers: [
            "Không được phép.",
            "Chỉ được lái ở tốc độ chậm và quãng đường ngắn.",
            "Chỉ được lái nếu trong cơ thể có nồng độ cồn thấp."
        ],
        correctIdx: 0
    }, {
        title: "Người điều khiển xe mô tô, ô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
        explanation: "Trong máu hoặc hơi thở có nồng độ cồn bị nghiêm cấm.",
        answers: [
            "Bị nghiêm cấm.",
            "Không bị nghiêm cấm.",
            "Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
        ],
        correctIdx: 0
    }, {
        title: "Sử dụng rượu, bia khi lái xe, nếu bị phát hiện thì bị xử lý như thế nào?",
        explanation: " Sử dụng rượu, bia khi lái xe bị phạt hành chính hoặc xử lý hình sự.",
        answers: [
            "Chỉ bị nhắc nhở.",
            "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm.",
            "Không bị xử lý hình sự."
        ],
        correctIdx: 1
    }, {
        title: "Theo Luật phòng chống tác hại của rượu, bia đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
        explanation: "Người điều khiển bị cấm sử dụng rượu, bia khi tham gia giao thông.",
        answers: [
            "Người điều khiển: xe ô tô, me mô tô, xe đạp, xe gắn máy.",
            "Người ngồi phía sau người điều khiển xe cơ giới.",
            "Người đi bộ.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển xe tham gia giao thông có được phép hay không?",
        explanation: "Không được phép giao xe cho người không đủ điều kiện tham gia giao thông.",
        answers: [
            "Chỉ được thực hiện nếu đã hướng dẫn đầy đủ.",
            "Không được phép.",
            "Được phép tùy từng trường hợp.",
            "Chỉ được phép thực hiện với thành viên trong gia đình."
        ],
        correctIdx: 1
    }, {
        title: "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
        explanation: "",
        answers: [
            "Bị nghiêm cấm tùy từng trường hợp.",
            "Không bị nghiêm cấm.",
            "Bị nghiêm cấm."
        ],
        correctIdx: 2
    }, {
        title: "Khi lái xe trên đường, người lái xe cần quan sát và đảm bảo tốc độ phương tiện như thế nào?",
        explanation: "",
        answers: [
            "Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
            "Chỉ lớn hơn tốc độ tối đa cho phép vào ban đêm.",
            "Không vượt quá tốc độ cho phép."
        ],
        correctIdx: 2
    }, {
        title: "Phương tiện giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
        explanation: "Di chuyển tốc độ thấp hơn đi về phía bên phải.",
        answers: [
            "Đi về phía bên trái.",
            "Đi về phía bên phải.",
            "Đi ở giữa."
        ],
        correctIdx: 1
    }, {
        title: "Trên đường có nhiều làn đường, khi điều khiển phương tiện ở tốc độ chậm bạn phải đi ở làn đường nào?",
        explanation: "Tốc độ chậm đi ở làn bên phải trong cùng.",
        answers: [
            "Đi ở làn bên phải trong cùng.",
            "Đi ở làn phía bên trái.",
            "Đi ở làn giữa.",
            "Đi ở bất cứ làn nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác."
        ],
        correctIdx: 0
    }, {
        title: "Hành vi vượt xe tại các vị trí có tầm nhìn hạn chế, đường vòng, đầu dốc có bị nghiêm cấm hay không?",
        explanation: "",
        answers: [
            "Không bị nghiêm cấm.",
            "Không bị nghiêm cấm khi rất vội.",
            "Bị nghiêm cấm.",
            "Không bị nghiêm cấm khi khẩn cấp."
        ],
        correctIdx: 2
    }, {
        title: "Khi lái xe trong khu đô thị và đông dân cư trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi như thế nào trong các trường hợp dưới đây?",
        explanation: "Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối.",
        answers: [
            "Từ 22 giờ đêm đến 5 giờ sáng.",
            "Từ 5 giờ sáng đến 22 giờ tối.",
            "Từ 23 giờ đêm đến 5 giờ sáng hôm sau."
        ],
        correctIdx: 1
    }, {
        title: "Người lái xe sử dụng đèn như thế nào khi lái xe trong khu đô thị và đông dân cư vào ban đêm?",
        explanation: "Trong đô thị sử dụng đèn chiếu gần.",
        answers: [
            "Bất cứ đèn nào miễn là mắt nhìn rõ phía trước.",
            "Chỉ bật đèn chiếu xa (đèn pha) khi không nhìn rõ đường.",
            "Đèn chiếu xa (đèn pha) khi đường vắng, đèn pha chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
            "Đèn chiếu gần (đèn cốt)."
        ],
        correctIdx: 3
    }, {
        title: "Hành vi lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới có được phép hay không?",
        explanation: "Không được phép lắp đặt còi đèn không đúng thiết kế.",
        answers: [
            "Được phép.",
            "Không được phép.",
            "Được phép tùy từng trường hợp."
        ],
        correctIdx: 1
    }, {
        title: "Trong trường hợp đặc biệt, để được lắp đặt, sử dụng còi, đèn không đúng với thiết kế của nhà sản xuất đối với từng loại xe cơ giới bạn phải đảm bảo yêu cầu nào dưới đây?",
        explanation: "Lắp đặt còi đèn không đúng thiết kế phải được chấp thuận của cơ quan có thẩm quyền.",
        answers: [
            "Phải đảm bảo phụ tùng do đúng nhà sản xuất đó cung cấp.",
            "Phải được chấp thuận của cơ quan có thẩm quyền.",
            "Phải là xe đăng ký và hoạt động tại các khu vực có địa hình phức tạp."
        ],
        correctIdx: 1
    }, {
        title: "Việc sản xuất, mua bán, sử dụng biển số xe cơ giới, xe máy chuyên dùng được quy định như thế nào trong Luật Giao thông đường bộ?",
        explanation: "",
        answers: [
            "Được phép sản xuất, sử dụng khi bị mất biển số.",
            "Được phép mua bán, sử dụng khi bị mất biển số.",
            "Nghiêm cấm sản xuất, mua bán, sử dụng trái phép."
        ],
        correctIdx: 2
    }, {
        title: "Người lái xe không được vượt xe khác khi gặp trường hợp nào ghi ở dưới đây?",
        explanation: "Không được vượt trên cầu hẹp có một làn xe.",
        answers: [
            "Trên cầu hẹp có một làn xe. Nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; xe được quyền ưu tiên đang phát tín hiệu ưu tiên đi làm nhiệm vụ.",
            "Trên cầu có từ 02 làn xe trở lên; nơi đường bộ giao nhau không cùng mức với đường sắt; xe được quyền ưu tiên đang đi phía trước nhưng không phát tín hiệu ưu tiên.",
            "Trên đường có 2 làn đường được phân chia làn bằng vạch kẻ nét đứt."
        ],
        correctIdx: 0
    }, {
        title: "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt có được quay đầu xe hay không?",
        explanation: "Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường.",
        answers: [
            "Được phép.",
            "Không được phép.",
            "Tùy từng trường hợp."
        ],
        correctIdx: 1
    }, {
        title: "Bạn đang lái xe, phía trước có một xe cảnh sát giao thông không phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
        explanation: "Được vượt khi xe không phát tín hiệu ưu tiên.",
        answers: [
            "Không được vượt.",
            "Được vượt khi đang đi trên cầu.",
            "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
            "Được vượt khi đảm bảo an toàn."
        ],
        correctIdx: 3
    }, {
        title: "Bạn đang lái xe, phía trước có một xe cứu thương đang phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
        explanation: "Không được vượt khi đang phát tín hiệu ưu tiên.",
        answers: [
            "Không được vượt.",
            "Được vượt khi đang đi trên cầu.",
            "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
            "Được vượt khi đảm bảo an toàn."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe không được quay đầu xe trong các trường hợp nào dưới đây?",
        explanation: "Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường.",
        answers: [
            "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt.",
            "Ở phía trước hoặc phía sau của phần đường dành cho người đi bộ qua đường, trên đường quốc lộ, tại nơi đường bộ giao nhau không cùng mức với đường sắt.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Bạn đang lái xe trong khu dân cư, có đông xe qua lại, nếu muốn quay đầu bạn cần làm gì để tránh ùn tắc và đảm bảo an toàn giao thông?",
        explanation: "Chỉ quay đầu xe ở điểm giao cắt hoặc nơi có biển báo cho phép quay đầu.",
        answers: [
            "Đi tiếp đến điểm giao cắt gần nhất hoặc nơi có biển báo cho phép quay đầu xe.",
            "Bấm đèn khẩn cấp và quay đầu xe từ từ bảo đảm an toàn.",
            "Bấm còi liên tục khi quay đầu để cảnh báo các xe khác.",
            "Nhờ một người ra hiệu giao thông trên đường chậm lại trước khi quay đầu."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
        explanation: "Cấm lùi xe ở khu vực cấm dừng và nơi đường bộ giao nhau.",
        answers: [
            "Ở khu vực cho phép đỗ xe.",
            "Ở khu vực cấm dừng và trên phần đường dành cho người đi bộ qua đường.",
            "Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc.",
            "Cả ý 2 và ý 3."
        ],
        correctIdx: 3
    }, {
        title: "Người điều khiển phương tiện giao thông trên đường phố có được dừng xe, đỗ xe trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước hay không?",
        explanation: "Không được dừng, đỗ xe trên miệng cống thoát nước.",
        answers: [
            "Được dừng xe, đỗ xe trong trường hợp cần thiết.",
            "Không được dừng xe, đỗ xe.",
            "Được dừng xe, không được đỗ xe."
        ],
        correctIdx: 1
    }, {
        title: "Khi xe đã kéo 1 xe hoặc xe đã kéo 1 rơ moóc, bạn có được phép kéo thêm xe (kể cả xe thô sơ) hoặc rơ moóc thứ hai hay không?",
        explanation: "Xe kéo đã kéo rơ moóc không được kéo thêm xe.",
        answers: [
            "Chỉ được thực hiện trên đường quốc lộ có hai làn xe một chiều.",
            "Chỉ được thực hiện trên đường cao tốc.",
            "Không được thực hiện vào ban ngày.",
            "Không được phép."
        ],
        correctIdx: 3
    }, {
        title: "Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
        explanation: "Xe mô tô không được kéo xe khác.",
        answers: [
            "Được phép.",
            "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
            "Tùy trường hợp.",
            "Không được phép."
        ],
        correctIdx: 3
    }, {
        title: "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy có được phép hay không?",
        explanation: "",
        answers: [
            "Được phép.",
            "Tùy trường hợp.",
            "Không được phép."
        ],
        correctIdx: 2
    }, {
        title: "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?",
        explanation: "",
        answers: [
            "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe để quệt xuống đường khi xe đang chạy.",
            "Buông một tay; sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
            "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
            "Chở người ngồi sau dưới 16 tuổi."
        ],
        correctIdx: 0
    }, {
        title: "Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
        explanation: "Xe mô tô không được mang vác vật cồng kềnh.",
        answers: [
            "Được mang, vác tùy trường hợp cụ thể.",
            "Không được mang, vác.",
            "Được mang, vác nhưng phải đảm bảo an toàn.",
            "Được mang, vác tùy theo sức khoẻ của bản thân."
        ],
        correctIdx: 1
    }, {
        title: "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được bám, kéo hoặc đẩy các phương tiện khác không?",
        explanation: "Xe mô tô không được kéo xe khác.",
        answers: [
            "Được phép.",
            "Được bám trong trường hợp phương tiện của mình bị hỏng.",
            "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
            "Không được phép."
        ],
        correctIdx: 3
    }, {
        title: "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được sử dụng ô khi trời mưa hay không?",
        explanation: "Không được sử dụng ô.",
        answers: [
            "Được sử dụng.",
            "Chỉ người ngồi sau được sử dụng.",
            "Không được sử dụng.",
            "Được sử dụng nếu không có áo mưa."
        ],
        correctIdx: 2
    }, {
        title: "Khi đang lên dốc người ngồi trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
        explanation: "Xe mô tô không được kéo xe khác.",
        answers: [
            "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
            "Không được phép.",
            "Chỉ được thực hiện trên đường thật vắng.",
            "Chỉ được phép khi người đi xe đạp đã quá mệt."
        ],
        correctIdx: 1
    }, {
        title: "Hành vi sử dụng xe mô tô để kéo, đẩy xe mô tô khác bị hết xăng đến trạm mua xăng có được phép hay không?",
        explanation: "Xe mô tô không được kéo xe khác.",
        answers: [
            "Chỉ được kéo nếu đã nhìn thấy trạm xăng.",
            "Chỉ được thực hiện trên đường vắng phương tiện cùng tham gia giao thông.",
            "Không được phép."
        ],
        correctIdx: 2
    }, {
        title: "Hành vi vận chuyển đồ vật cồng kềnh bằng xe mô tô, xe gắn máy khi tham gia giao thông có được phép hay không?",
        explanation: "Xe mô tô không được mang vác vật cồng kềnh.",
        answers: [
            "Không được vận chuyển.",
            "Chỉ được vận chuyển khi đã chằng buộc cẩn thận.",
            "Chỉ được vận chuyển vật cồng kềnh trên xe máy nếu khoảng cách về nhà ngắn hơn 2 km."
        ],
        correctIdx: 0
    }, {
        title: "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe ô tô tải, máy kéo có trọng tải từ 3.500 kg trở lên; xe hạng B2 kéo rơ moóc (FB2)?",
        explanation: "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        answers: [
            "19 tuổi.",
            "21 tuổi.",
            "20 tuổi."
        ],
        correctIdx: 1
    }, {
        title: "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi lanh từ 50 cm3 trở lên và các loại xe có kết cấu tương tự; xe ô tô tải, máy kéo có trọng tải dưới 3.500 kg; xe ô tô chở người đến 9 chỗ ngồi?",
        explanation: "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        answers: [
            "16 tuổi.",
            "18 tuổi.",
            "17 tuổi."
        ],
        correctIdx: 1
    }, {
        title: "Người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E), lái xe hạng D kéo rơ moóc (FD) phải đủ bao nhiêu tuổi trở lên?",
        explanation: "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        answers: [
            "23 tuổi.",
            "24 tuổi.",
            "27 tuổi.",
            "30 tuổi."
        ],
        correctIdx: 2
    }, {
        title: "Tuổi tối đa của người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E) là bao nhiêu tuổi?",
        explanation: "Độ tuổi tối đa người lái xe ô tô hạng E: Nam 55 tuổi và nữ 50 tuổi.",
        answers: [
            "55 tuổi đối với nam và 50 tuổi đối với nữ.",
            "55 tuổi đối với nam và nữ.",
            "60 tuổi đối với nam và 55 tuổi đối với nữ.",
            "45 tuổi đối với nam và 40 tuổi đối với nữ."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe chở người từ 10 đến 30 chỗ ngồi (hạng D), lái xe hạng C kéo rơ moóc (FC) phải đủ bao nhiêu tuổi trở lên?",
        explanation: "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        answers: [
            "23 tuổi.",
            "24 tuổi.",
            "22 tuổi.",
            "18 tuổi."
        ],
        correctIdx: 1
    }, {
        title: "Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?",
        explanation: "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        answers: [
            "Xe mô tô 2 bánh có dung tích xi-lanh từ 50 cm3 trở lên.",
            "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
            "Xe ô tô tải dưới 3.500 kg; xe chở người đến 9 chỗ ngồi.",
            "Tất cả các ý nêu trên."
        ],
        correctIdx: 1
    }, {
        title: "Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
        explanation: "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        answers: [
            "Xe mô tô có dung tích xi-lanh 125 cm3.",
            "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.",
            "Xe mô tô có dung tích xi-lanh 100 cm3."
        ],
        correctIdx: 1
    }, {
        title: "Người có Giấy phép lái xe mô tô hạng A1 được phép điều khiển loại xe nào dưới đây?",
        explanation: "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        answers: [
            "Xe mô tô hai bánh có dung tích xi-lanh từ 50 cm3 đến dưới 175 cm3.",
            "Xe mô tô ba bánh dùng cho người khuyết tật.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Người có Giấy phép lái xe mô tô hạng A2 được phép điều khiển loại xe nào dưới đây?",
        explanation: "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        answers: [
            "Xe mô tô ba bánh.",
            "Xe mô tô hai bánh có dung tích xi-lanh từ 175 cm3 trở lên và các loại xe quy định cho Giấy phép lái xe hạng A1.",
            "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg."
        ],
        correctIdx: 1
    }, {
        title: "Người có Giấy phép lái xe mô tô hạng A3 được phép điều khiển loại xe nào dưới đây?",
        explanation: "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        answers: [
            "Xe mô tô ba bánh.",
            "Xe mô tô hai bánh có dung tích xi-lanh từ 175 cm3 trở lên.",
            "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg."
        ],
        correctIdx: 0
    }, {
        title: "Người có Giấy phép lái xe hạng B1 số tự động được điều khiển loại xe nào?",
        explanation: "B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg; B1 không hành nghề lái xe.",
        answers: [
            "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Không được hành nghề lái xe.",
            "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Được hành nghề lái xe kinh doanh vận tải.",
            "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật."
        ],
        correctIdx: 0
    }, {
        title: "Người có Giấy phép lái xe hạng B1 được điều khiển loại xe nào?",
        explanation: "B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg; B1 không hành nghề lái xe.",
        answers: [
            "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Được hành nghề lái xe.",
            "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Không được hành nghề lái xe.",
            "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật."
        ],
        correctIdx: 1
    }, {
        title: "Người có Giấy phép lái xe hạng B2 được điều khiển loại xe nào dưới đây?",
        explanation: "B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg.",
        answers: [
            "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải dưới 3.500 kg.",
            "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg."
        ],
        correctIdx: 1
    }, {
        title: "Người có Giấy phép lái xe hạng C được điều khiển loại xe nào dưới đây?",
        explanation: "C đến 9 chỗ ngồi, xe trên 3.500 kg.",
        answers: [
            "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg."
        ],
        correctIdx: 2
    }, {
        title: "Người có Giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
        explanation: "D chở đến 30 người.",
        answers: [
            "Ô tô chở người đến 30 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2."
        ],
        correctIdx: 0
    }, {
        title: "Người có Giấy phép lái xe hạng E được điều khiển loại xe nào dưới đây?",
        explanation: "E chở trên 30 người.",
        answers: [
            "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2.",
            "Ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe kéo rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C, D, FB2, FD."
        ],
        correctIdx: 1
    }, {
        title: "Người có Giấy phép lái xe hạng FC được điều khiển loại xe nào dưới đây?",
        explanation: "FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc); FE: E + kéo (ô tô chở khách nối toa)",
        answers: [
            "Các loại xe được quy định tại Giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chở khách nối toa và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2 và FB2.",
            "Các loại xe được quy định tại Giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2.",
            "Mô tô hai bánh, các loại xe được quy định tại Giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2.",
            "Tất cả các loại xe nêu trên."
        ],
        correctIdx: 1
    }, {
        title: "Người có Giấy phép lái xe hạng FE được điều khiển loại xe nào dưới đây?",
        explanation: "FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc); FE: E + kéo (ô tô chở khách nối toa)",
        answers: [
            "Các loại xe được quy định tại Giấy phép lái xe hạng E có kéo rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C, D, FB2, FD.",
            "Các loại xe được quy định tại Giấy phép lái xe hạng E có kéo rơ moóc, đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C, D, FB2, FD.",
            "Tất cả các loại xe nêu trên."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/72.webp"),
        title: "Biển báo hiệu có dạng hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số, chữ viết màu đen là loại biển gì dưới đây?",
        explanation: "Biển cấm: Vòng tròn đỏ.",
        answers: [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh.",
            "Biển báo chỉ dẫn."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/73.webp"),
        title: "Biển báo hiệu có dạng tam giác đều, viền đỏ, nền màu vàng, trên nền có hình vẽ màu đen là loại biển gì dưới đây?",
        explanation: "Biển nguy hiểm: Hình tam giác vàng.",
        answers: [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh.",
            "Biển báo chỉ dẫn."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/74.webp"),
        title: "Biển báo hiệu hình tròn, có nền xanh lam, có hình vẽ màu trắng là loại biển gì dưới đây?",
        explanation: "Biển hiệu lệnh: \u001dVòng tròn xanh.",
        answers: [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh phải thi hành.",
            "Biển báo chỉ dẫn."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/75.webp"),
        title: "Biển báo hiệu hình chữ nhật hoặc hình vuông hoặc hình mũi tên nền xanh lam là loại biển gì dưới đây?",
        explanation: "Biển chỉ dẫn: Hình vuông hoặc hình chữ nhật xanh.",
        answers: [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh phải thi hành.",
            "Biển báo chỉ dẫn."
        ],
        correctIdx: 3
    }, {
        title: "Khi tập lái xe ô tô, người tập lái xe phải thực hiện các điều kiện gì dưới đây?",
        explanation: "Khi tập lái cần có giáo viên và phù hiệu.",
        answers: [
            "Phải thực hành lái xe trên xe tập lái và có giáo viên bảo trợ tay lái.",
            "Phải mang theo phù hiệu \"học viên tập lái xe\".",
            "Phải mang theo Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, Giấy phép vận chuyển (nếu loại xe đó cần phải có).",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        title: "Khi dạy thực hành lái xe, giáo viên phải mang theo các giấy tờ gì dưới đây?",
        explanation: "Giáo viên phải mang giấy phép xe tập lái.",
        answers: [
            "Phải mang theo phù hiệu \"Giáo viên dạy lái xe\", giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, giấy phép xe tập lái do cơ quan có thẩm quyền cấp còn hiệu lực.",
            "Phải mang theo phù hiệu \"Học viên tập lái xe\" và kế hoạch học tập của khóa học.",
            "Phải mang theo giấy chứng nhận Giáo viên dạy thực hành lái xe, biên lai thu phí bảo trì đường bộ."
        ],
        correctIdx: 0
    }, {
        title: "Xe ô tô tập lái phải đảm bảo các điều kiện gì dưới đây?",
        explanation: "",
        answers: [
            "Gắn 02 biển \"TẬP LÁI\" trước và sau xe, có hệ thống phanh phụ được lắp đặt bảo đảm hiệu quả phanh, được bố trí bên ghế ngồi của giáo viên dạy thực hành lái xe.",
            "Xe tập lái loại tải thùng có mui che mưa, che nắng, ghế ngồi cho học viên, có Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường phương tiện giao thông cơ giới đường bộ còn hiệu lực.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Việc sát hạch cấp Giấy phép lái xe ô tô phải thực hiện ở đâu và như thế nào?",
        explanation: "",
        answers: [
            "Tại các cơ sở đào tạo lái xe có đủ điều kiện và phải bảo đảm công khai, minh bạch.",
            "Tại sân tập lái của cơ sở đào tạo lái xe và phải đảm bảo công khai, minh bạch.",
            "Tại các trung tâm sát hạch lái xe có đủ điều kiện hoạt động và phải bảo đảm công khai, minh bạch."
        ],
        correctIdx: 2
    }, {
        title: "Khi điều khiển xe chạy trên đường, người lái xe phải mang theo các loại giấy tờ gì?",
        explanation: "",
        answers: [
            "Giấy chứng nhận tốt nghiệp khóa đào tạo của hạng xe đang điều khiển, đăng ký xe, giấy phép lưu hành xe.",
            "Giấy phép lái xe phù hợp với loại xe đó; lệnh vận chuyển, đăng ký xe, giấy chứng nhận kiểm tra chất lượng an toàn kỹ thuật và bảo vệ môi trường của xe cơ giới sau khi cải tạo; giấy phép vận chuyển (nếu loại xe đó cần phải có).",
            "Giấy phép lái xe phù hợp với loại xe đó , đăng ký xe, giấy chứng nhận kiểm định kỹ thuật và bảo vệ môi trường, giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới và giấy phép vận chuyển (nếu loại xe đó cần phải có), các giấy tờ phải còn giá trị sử dụng."
        ],
        correctIdx: 2
    }, {
        title: "Khi sử dụng Giấy phép lái xe đã khai báo mất để điều khiển phương tiện cơ giới đường bộ, ngoài việc bị thu hồi Giấy phép lái xe, chịu trách nhiệm trước pháp luật, người lái xe không được cấp Giấy phép lái xe trong thời gian bao nhiêu năm?",
        explanation: "05 năm không cấp lại nếu sử dụng bằng lái đã khai báo mất.",
        answers: [
            "02 năm.",
            "03 năm.",
            "05 năm.",
            "04 năm."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/82.webp"),
        title: "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Người điều khiển giao thông tay giang ngang thì trước mặt và sau lưng dừng lại.",
        answers: [
            "Người tham gia giao thông ở các hướng phải dừng lại.",
            "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của cảnh sát giao thông.",
            "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
            "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/83.webp"),
        title: "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Người điều khiển giao thông giơ tay thẳng đứng thì ở các hướng phải dừng lại.",
        answers: [
            "Người tham gia giao thông ở các hướng đối diện cảnh sát giao thông được đi, các hướng khác cần phải dừng lại.",
            "Người tham gia giao thông được rẽ phải theo chiều mũi tên màu xanh ở bục cảnh sát giao thông.",
            "Người tham gia giao thông ở các hướng đều phải dừng lại trừ các xe đã ở trong khu vực giao nhau.",
            "Người ở hướng đối diện cảnh sát giao thông phải dừng lại, các hướng khác được đi trong đó có bạn."
        ],
        correctIdx: 2
    }, {
        title: "Trên đường giao thông, khi hiệu lệnh của người điều khiển giao thông trái với hiệu lệnh của đèn hoặc biển báo hiệu thì người tham gia giao thông phải chấp hành theo hiệu lệnh nào?",
        explanation: "Ưu tiên hiệu lệnh của người điều khiển giao thông.",
        answers: [
            "Hiệu lệnh của người điều khiển giao thông.",
            "Hiệu lệnh của đèn điều khiển giao thông.",
            "Hiệu lệnh của biển báo hiệu đường bộ.",
            "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn."
        ],
        correctIdx: 0
    }, {
        title: "Tại nơi có biển báo hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phải chấp hành hiệu lệnh của báo hiệu nào?",
        explanation: "Ưu tiên biển báo tạm thời.",
        answers: [
            "Biển báo hiệu cố định.",
            "Báo hiệu tạm thời."
        ],
        correctIdx: 1
    }, {
        title: "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?",
        explanation: "Chuyển làn đường phải có tín hiệu báo trước.",
        answers: [
            "Cho xe đi trên bất kỳ làn đường nào hoặc giữa 02 làn đường nếu không có xe đi phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
            "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn phải có tín hiệu báo trước  và phải bảo đảm an toàn.",
            "Phải cho xe đi trong một làn đường, khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn."
        ],
        correctIdx: 1
    }, {
        title: "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Xe thô sơ phải đi làn đường nên phải trong cùng.",
        answers: [
            "Xe thô sơ phải đi trên làn đường bên trái ngoài cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
            "Xe thô sơ phải đi trên làn đường bên phải trong cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
            "Xe thô sơ đi trên làn đường phù hợp không gây cản trở giao thông; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải."
        ],
        correctIdx: 1
    }, {
        title: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
        explanation: "Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối. Nên phải sử dụng đèn để báo hiệu.",
        answers: [
            "Phải báo hiệu bằng đèn hoặc còi.",
            "Chỉ được báo hiệu bằng còi.",
            "Phải báo hiệu bằng cả còi và đèn.",
            "Chỉ được báo hiệu bằng đèn."
        ],
        correctIdx: 3
    }, {
        title: "Khi điều khiển xe chạy trên đường biết có xe sau xin vượt nếu đủ điều kiện an toàn người lái xe phải làm gì?",
        explanation: "",
        answers: [
            "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe sau vượt.",
            "Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt.",
            "Cho xe tránh về bên trái mình và ra hiệu cho xe sau vượt; nếu có chướng ngại vật phía trước hoặc thiếu điều kiện an toàn chưa cho vượt được phải ra hiệu cho xe sau biết; cấm gây trở ngại cho xe xin vượt."
        ],
        correctIdx: 1
    }, {
        title: "Trong khu dân cư, ở nơi nào cho phép người lái xe, người điều khiển xe máy chuyên dùng được quay đầu xe?",
        explanation: "Quay xe ở nơi giao nhau và có biển báo cho quay xe.",
        answers: [
            "Ở nơi đường giao nhau và nơi có biển báo cho phép quay đầu xe.",
            "Ở nơi có đường rộng để cho các loại xe chạy một chiều.",
            "Ở bất kỳ nơi nào."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe phải làm gì khi quay đầu xe trên cầu, đường ngầm hay khu vực đường bộ giao nhau cùng mức với đường sắt?",
        explanation: "Không được quay xe trên cầu.",
        answers: [
            "Không được quay đầu xe.",
            "Lợi dụng chỗ rộng và phải có người làm tín hiệu sau xe để bảo đảm an toàn.",
            "Lợi dụng chỗ rộng có thể quay đầu được để quay đầu xe cho an toàn."
        ],
        correctIdx: 0
    }, {
        title: "Khi muốn chuyển hướng, người lái xe phải thực hiện như thế nào để đảm bảo an toàn giao thông?",
        explanation: "Chuyển hướng phải giảm tốc độ.",
        answers: [
            "Quan sát gương, ra tín hiệu, quan sát an toàn và chuyển hướng.",
            "Quan sát gương, giảm tốc độ, ra tín hiệu chuyển hướng, quan sát an toàn và chuyển hướng.",
            "Quan sát gương, tăng tốc độ, ra tín hiệu và chuyển hướng."
        ],
        correctIdx: 1
    }, {
        title: "Khi lùi xe, người lái xe phải làm gì để bảo đảm an toàn?",
        explanation: "Lùi xe phải quan sát phía sau.",
        answers: [
            "Quan sát phía trước và cho lùi xe ở tốc độ chậm.",
            "Lợi dụng nơi đường giao nhau đủ chiều rộng để lùi.",
            "Phải quan sát phía sau, có tín hiệu cần thiết và chỉ khi nào thấy không nguy hiểm mới được lùi."
        ],
        correctIdx: 2
    }, {
        title: "Khi bạn nhìn thấy đèn phía sau xe ô tô có màu sáng trắng, ô tô đó đang trong trạng thái như thế nào?",
        explanation: "Đèn sau màu sáng trắng là đang lùi xe.",
        answers: [
            "Đang phanh.",
            "Đang bật đèn sương mù.",
            "Đang chuẩn bị lùi hoặc đang lùi.",
            "Đang bị hỏng động cơ."
        ],
        correctIdx: 2
    }, {
        title: "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
        explanation: "Tránh xe ngược chiều thì nhường đường qua đường hẹp và nhường xe lên dốc.",
        answers: [
            "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi.",
            "Xe xuống dốc phải nhường đường cho xe đang lên dốc; xe nào có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật đi trước.",
            "Xe lên dốc phải nhường đường cho xe xuống dốc; xe nào không có chướng ngại vật phía trước phải nhường đường cho xe có chướng ngại vật đi trước.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        title: "Bạn đang lái xe trên đường hẹp, xuống dốc và gặp một xe đang đi lên dốc, bạn cần làm gì?",
        explanation: "Nhường đường cho xe lên dốc.",
        answers: [
            "Tiếp tục đi vì xe lên dốc phải nhường đường cho mình.",
            "Nhường đường cho xe lên dốc.",
            "Chỉ nhường đường khi xe lên dốc nháy đèn."
        ],
        correctIdx: 1
    }, {
        title: "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải nhường đường như thế nào là đúng quy tắc giao thông?",
        explanation: "Đường không ưu tiên nhường đường cho xe trên đường ưu tiên.",
        answers: [
            "Nhường đường cho xe đi ở bên phải mình tới.",
            "Nhường đường cho xe đi ở bên trái mình tới.",
            "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới."
        ],
        correctIdx: 2
    }, {
        title: "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
        explanation: "Giao nhau không có vòng xuyến thì nhường xe đến từ bên phải.",
        answers: [
            "Phải nhường đường cho xe đi đến từ bên phải.",
            "Xe báo hiệu xin đường trước, xe đó được đi trước.",
            "Phải nhường đường cho xe đi đến từ bên trái."
        ],
        correctIdx: 0
    }, {
        title: "Trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt thì loại phương tiện nào được quyền ưu tiên đi trước?",
        explanation: "",
        answers: [
            "Phương tiện nào bên phải không vướng.",
            "Phương tiện nào ra tín hiệu xin đường trước.",
            "Phương tiện giao thông đường sắt."
        ],
        correctIdx: 2
    }, {
        title: "Tại nơi đường bộ giao nhau cùng mức với đường sắt chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu màu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông phải dừng lại ngay và giữ khoảng cách tối thiểu bao nhiêu mét tính từ ray gần nhất?",
        explanation: "Đứng cách ray đường sắt 5m.",
        answers: [
            "5 mét.",
            "3 mét.",
            "4 mét."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe phải làm gì khi điều khiển xe vào đường cao tốc?",
        explanation: "Vào cao tốc phải nhường đường cho xe đang chạy trên đường.",
        answers: [
            "Phải có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường; khi thấy an toàn mới cho xe nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi vào làn đường của đường cao tốc.",
            "Phải có tín hiệu xin vào và phải nhanh chóng vượt xe đang chạy trên đường để nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy qua làn đường đó để vào làn đường của đường cao tốc."
        ],
        correctIdx: 0
    }, {
        title: "Trên đường cao tốc, người lái xe phải dừng xe, đỗ xe như thế nào để đảm bảo an toàn giao thông?",
        explanation: "Trên cao tốc chỉ dừng đỗ ở nơi quy định.",
        answers: [
            "Không được dừng xe, đỗ xe hoặc chỉ được dừng xe, đỗ xe ở nơi đường rộng; nếu dừng, đỗ xe ở nơi đường hẹp phải sử dụng còi báo hiệu để người lái xe khác biết.",
            "Chỉ được dừng xe, đỗ xe ở nơi quy định; trường hợp buộc phải dừng xe, đỗ xe không đúng nơi quy định thì người lái xe phải đưa xe ra khỏi phần đường xe chạy, nếu không thể được thì phải báo hiệu để người lái xe khác biết.",
            "Chỉ được dừng xe, đỗ xe ở nơi đường rộng; trường hợp dừng xe, đỗ xe tại nơi đường hẹp phải đặt các chướng ngại vật trên đường để yêu cầu người lái xe khác giảm tốc độ để bảo đảm an toàn."
        ],
        correctIdx: 1
    }, {
        title: "Những trường hợp nào ghi ở dưới đây không được đi vào đường cao tốc trừ người, phương tiện, thiết bị phục vụ cho việc quản lý, bảo trì đường cao tốc?",
        explanation: "Xe thiết kế nhỏ hơn 70km/h không được vào cao tốc.",
        answers: [
            "Người đi bộ, xe thô sơ, xe gắn máy, xe mô tô và máy kéo; xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn 70km/h.",
            "Xe mô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 70km/h.",
            "Người đi bộ, xe thô sơ, xe gắn máy và xe ô tô."
        ],
        correctIdx: 0
    }, {
        title: "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
        explanation: "Trong hầm chỉ được dừng xe, đỗ xe ở nơi quy định.",
        answers: [
            "Xe cơ giới, xe máy chuyên dùng phải bật đèn; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; chỉ được dừng xe, đỗ xe ở nơi quy định.",
            "Xe cơ giới phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
            "Xe máy chuyên dùng phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết."
        ],
        correctIdx: 0
    }, {
        title: "Xe quá tải trọng, quá khổ giới hạn tham gia giao thông cần tuân thủ quy định nào ghi ở dưới đây?",
        explanation: "Xe quá tải trọng phải do cơ quan quản lý đường bộ cấp phép.",
        answers: [
            "Phải được cơ quan quản lý đường bộ có thẩm quyền cấp phép và phải thực hiện các biện pháp bắt buộc để bảo vệ đường bộ, bảo đảm an toàn giao thông.",
            "Chủ phương tiện và lái xe chỉ cần thực hiện biện pháp để hạn chế việc gây hư hại đường bộ.",
            "Được tham gia giao thông trên đường rộng.",
            "Chỉ được tham gia giao thông vào ban đêm."
        ],
        correctIdx: 0
    }, {
        title: "Việc nối giữa xe kéo với xe được kéo trong trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì phải dùng cách nào?",
        explanation: "\u001dKéo xe không hệ thống hãm phải dùng thanh nối cứng.",
        answers: [
            "Dùng dây cáp có độ dài 10 mét.",
            "Dùng dây cáp có độ dài 5 mét.",
            "Dùng thanh nối cứng."
        ],
        correctIdx: 2
    }, {
        title: "Xe kéo rơ moóc khi tham gia giao thông phải tuân thủ điều kiện nào ghi ở dưới đây?",
        explanation: "Trọng lượng xe kéo rơ moóc phải lớn hơn rơ moóc.",
        answers: [
            "Phải có tổng tổng trọng lượng lớn hơn tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho rơ moóc.",
            "Phải có tổng tổng trọng lượng tương đương tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho xe kéo rơ moóc.",
            "Phải được lắp phanh phụ theo quy định để đảm bảo an toàn."
        ],
        correctIdx: 0
    }, {
        title: "Xe ô tô kéo xe khác thế nào là đúng quy tắc giao thông?",
        explanation: "\u001dKéo xe không hệ thống hãm phải dùng thanh nối cứng.",
        answers: [
            "Được kéo theo một xe ô tô hoặc một xe máy chyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng.",
            "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người ngồi trên xe để kịp thời phát tín hiệu các trường hợp mất an toàn.",
            "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và hệ thống phanh bị hỏng, xe kéo nhau phải nối bằng dây cáp có độ dài phù hợp."
        ],
        correctIdx: 0
    }, {
        title: "Người ngồi trên xe mô tô 2 bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách khi nào?",
        explanation: "",
        answers: [
            "Khi tham gia giao thông đường bộ.",
            "Chỉ khi đi trên đường chuyên dùng; đường cao tốc.",
            "Khi tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ."
        ],
        correctIdx: 0
    }, {
        title: "Người điều khiển xe mô tô hai bánh, xe gắn máy được phép chở tối đa 2 người trong những trường hợp nào?",
        explanation: "",
        answers: [
            "Chở người bệnh đi cấp cứu; trẻ em dưới 14 tuổi.",
            "Áp giải người có hành vi vi phạm pháp luật.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Người điều khiển xe mô tô hai bánh, xe gắn máy không được thực hiện những hành vi nào dưới đây?",
        explanation: "Xe mô tô hai bánh không được đi vào phần đường dành cho người đi bộ.",
        answers: [
            "Đi vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính), đi xe dàn hàng ngang.",
            "Chở 02 người; trong đó, có người bệnh đi cấp cứu hoặc trẻ em dưới 14 tuổi hoặc áp giải người có hành vi vi phạm pháp luật.",
            "Điều khiển phương tiện tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ."
        ],
        correctIdx: 0
    }, {
        title: "Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính) hay không?",
        explanation: "",
        answers: [
            "Được phép nhưng phải đảm bảo an toàn.",
            "Không được phép.",
            "Được phép tùy từng hoàn cảnh, điều kiện cụ thể."
        ],
        correctIdx: 1
    }, {
        title: "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép (có thể dừng lại một cách an toàn) trong trường hợp nào dưới đây?",
        explanation: "",
        answers: [
            "Khi có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; khi chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế; khi qua nơi đường giao nhau, nơi đường bộ giao nhau với đường sắt; đường vòng; đường có địa hình quanh co, đèo dốc.",
            "Khi qua cầu, cống hẹp; khi lên gần đỉnh dốc, khi xuống dốc, khi qua trường học, khu đông dân cư, khu vực đang thi công trên đường bộ; hiện trường xảy ra tai nạn giao thông.",
            "Khi điều khiển xe vượt xe khác trên đường quốc lộ, đường cao tốc.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        title: "Khi gặp một đoàn xe, một đoàn xe tang hay gặp một đoàn người có tổ chức theo đội ngũ, người lái xe phải xử lý như thế nào?",
        explanation: "",
        answers: [
            "Từ từ đi cắt qua đoàn người, đoàn xe.",
            "Không được cắt ngang qua đoàn người, đoàn xe.",
            "Báo hiệu từ từ cho xe đi cắt qua để bảo đảm an toàn."
        ],
        correctIdx: 1
    }, {
        title: "Tại ngã ba hoặc ngã tư không có đảo an toàn, người lái xe phải nhường đường như thế nào là đúng trong các trường hợp dưới đây?",
        explanation: "Người lái xe phải nhường đường cho xe ưu tiên.",
        answers: [
            "Nhường đường cho người đi bộ đang đi trên phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ưu tiên, đường chính từ bất kỳ hướng nào tới; nhường đường cho xe ưu tiên, xe đi từ bên phải đến.",
            "Nhường đường cho người đi bộ đang đứng chờ đi qua phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ngược chiều, đường nhánh từ bất kỳ hướng nào tới; nhường đường cho xe đi từ bên trái đến.",
            "Không phải nhường đường."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe cơ giới, người lái xe phải bật đèn tín hiệu báo rẽ trong trường hợp nào dưới đây?",
        explanation: "Phải bật đèn tín hiệu rẽ trước khi thay đổi làn đường.",
        answers: [
            "Khi cho xe chạy thẳng.",
            "Trước khi thay đổi làn đường.",
            "Sau khi thay đổi làn đường."
        ],
        correctIdx: 1
    }, {
        title: "Trên đoạn đường hai chiều không có giải phân cách giữa, người lái xe không được vượt xe khác trong các trường hợp nào dưới đây?",
        explanation: "Không được vượt khi xe bị vượt bất ngờ tăng tốc hoặc phát hiện có xe đi ngược chiều.",
        answers: [
            "Xe bị vượt bất ngờ tăng tốc độ và cố tình không nhường đường.",
            "Xe bị vượt giảm tốc độ và nhường đường.",
            "Phát hiện có xe đi ngược chiều.",
            "Cả ý 1 và ý 3."
        ],
        correctIdx: 3
    }, {
        title: "Khi lái xe trên đường vắng mà cảm thấy buồn ngủ, người lái xe nên chọn cách xử lý như thế nào cho phù hợp?",
        explanation: "",
        answers: [
            "Tăng tốc độ kết hợp với nghe nhạc và đi tiếp.",
            "Quan sát, dừng xe tại nơi quy định; nghỉ cho đến khi hết buồn ngủ và đi tiếp.",
            "Sử dụng một ít rượu và bia để hết buồn ngủ và đi tiếp."
        ],
        correctIdx: 1
    }, {
        title: "Trên đường cao tốc, người lái xe xử lý như thế nào khi đã vượt quá lối ra của đường định rẽ?",
        explanation: "Trên cao tốc vượt quá lối rẽ thì chạy đến lối ra tiếp theo.",
        answers: [
            "Quay xe, chạy trên lề đường bên phải và rẽ khỏi đường cao tốc.",
            "Lùi xe sát lề đường bên phải và rẽ khỏi đường cao tốc.",
            "Tiếp tục chạy đến lối ra tiếp theo."
        ],
        correctIdx: 2
    }, {
        title: "Người lái xe mô tô xử lý như thế nào khi cho xe mô tô phía sau vượt?",
        explanation: "Xử lý cho xe sau vượt thì giảm tốc độ và đi về bên phải.",
        answers: [
            "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
            "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
            "Nếu đủ điều kiện an toàn, người lái xe phải tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
        ],
        correctIdx: 0
    }, {
        title: "Khi xe ô tô bị hỏng tại vị trí giao nhau giữa đường bộ và đường sắt, người lái xe xử lý như thế nào?",
        explanation: "Xe hỏng tại vị trí giao nhau đường sắt thì đặt báo hiệu trên đường sắt tối thiểu 500m về hai phía.",
        answers: [
            "Nhanh chóng đặt báo hiệu trên đường sắt cách tối thiểu 500 mét về hai phía để báo cho người điều khiển phương tiện đường sắt và tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất, đồng thời phải bằng mọi biện pháp nhanh chóng đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt.",
            "Nhanh chóng đặt biển cảnh báo nguy hiểm tại vị trí xe ô tô bị hỏng để đoàn tàu dừng lại.",
            "Liên hệ ngay với đơn vị cứu hộ để đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt."
        ],
        correctIdx: 0
    }, {
        title: "Trong các trường hợp dưới đây, để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
        explanation: "",
        answers: [
            "Phải đội mũ bảo hiểm đạt chuẩn, có cài quai đúng quy cách, mặc quần áo gọn gàng; không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
            "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải đảm bảo an toàn.",
            "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa."
        ],
        correctIdx: 0
    }, {
        title: "Đường bộ trong khu vực đông dân cư gồm những đoạn đường nào dưới đây?",
        explanation: "Đường bộ trong khu vực đông dân cư được xác định bằng biển báo.",
        answers: [
            "Là đoạn đường nằm trong khu công nghiệp có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
            "Là đoạn đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn và những đoạn đường có đông dân cư sinh sống sát dọc theo đường, có các hoạt động ảnh hưởng đến an toàn giao thông; được xác định bằng biển báo hiệu là đường khu đông dân cư.",
            "Là đoạn đường bộ nằm ngoài khu vực nội thành phố, nội thị xã có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới."
        ],
        correctIdx: 1
    }, {
        title: "Tốc độ tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc) không được vượt qua bao nhiêu km/h?",
        explanation: "Xe gắn máy tối đa 40km/h.",
        answers: [
            "50 km/h.",
            "40 km/h.",
            "60 km/h."
        ],
        correctIdx: 1
    }, {
        title: "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
        explanation: "Có giải phân cách giữa thì được xem là đường đôi.Trong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
        answers: [
            "60 km/h.",
            "50 km/h.",
            "40 km/h."
        ],
        correctIdx: 0
    }, {
        title: "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều không có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
        explanation: "Trong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
        answers: [
            "60 km/h.",
            "50 km/h.",
            "40 km/h."
        ],
        correctIdx: 1
    }, {
        title: "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
        explanation: "Xe cơ giới không bao gồm xe gắn máy.Trong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
        answers: [
            "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
            "Xe gắn máy, xe máy chuyên dùng.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
        explanation: "Xe cơ giới không bao gồm xe gắn máy.Trong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
        answers: [
            "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
            "Xe gắn máy, xe máy chuyên dùng.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Trên đường bộ (trừ đường cao tốc) ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 90 km/h?",
        explanation: "Đường có giải phân cách được xem là đường đôi.Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        answers: [
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3,5 tấn.",
            "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô."
        ],
        correctIdx: 1
    }, {
        title: "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
        explanation: "Đường có giải phân cách được xem là đường đôi.Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        answers: [
            "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3,5 tấn."
        ],
        correctIdx: 1
    }, {
        title: "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
        explanation: "Đường có giải phân cách được xem là đường đôi.Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        answers: [
            "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông).",
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3,5 tấn."
        ],
        correctIdx: 0
    }, {
        title: "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
        explanation: "Đường có giải phân cách được xem là đường đôi.Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        answers: [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3,5 tấn."
        ],
        correctIdx: 0
    }, {
        title: "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
        explanation: "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        answers: [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3,5 tấn."
        ],
        correctIdx: 2
    }, {
        title: "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
        explanation: "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        answers: [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3,5 tấn."
        ],
        correctIdx: 1
    }, {
        title: "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
        explanation: "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        answers: [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
            "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông)."
        ],
        correctIdx: 2
    }, {
        title: "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
        explanation: "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        answers: [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc."
        ],
        correctIdx: 2
    }, {
        title: "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 60 km/h đến 80 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        explanation: "Khoảng cách an toàn: 60km/h: 35m; 60 đến 80km/h: 55m; 80 đến 100km/h: 70m; 100 đến 120km/h: 100m.",
        answers: [
            "35 m.",
            "55 m.",
            "70 m."
        ],
        correctIdx: 1
    }, {
        title: "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 80 km/h đến 100 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        explanation: "Khoảng cách an toàn: 60km/h: 35m; 60 đến 80km/h: 55m; 80 đến 100km/h: 70m; 100 đến 120km/h: 100m.",
        answers: [
            "35 m.",
            "55 m.",
            "70 m."
        ],
        correctIdx: 2
    }, {
        title: "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 100 km/h đến 120 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        explanation: "Khoảng cách an toàn: 60km/h: 35m; 60 đến 80km/h: 55m; 80 đến 100km/h: 70m; 100 đến 120km/h: 100m.",
        answers: [
            "55 m.",
            "70 m.",
            "100 m."
        ],
        correctIdx: 2
    }, {
        title: "Khi điều khiển chạy với tốc độ dưới 60 km/h, để đảm bảo khoảng cách an toàn giữa hai xe, người lái xe phải điều khiển xe như thế nào?",
        explanation: "Khoảng cách an toàn dưới 60km/h: Chủ động và đảm bảo khoảng cách.",
        answers: [
            "Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước mình.",
            "Đảm bảo khoảng cách an toàn theo mật độ phương tiện, tình hình giao thông thực tế.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
        explanation: "Giảm tốc độ, chú ý quan sát khi gặp biển báo nguy hiểm.",
        answers: [
            "Gặp biển báo nguy hiểm trên đường.",
            "Gặp biển chỉ dẫn trên đường.",
            "Gặp biển báo hết mọi lệnh cấm.",
            "Gặp biển báo hết hạn chế tốc độ tối đa cho phép."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
        explanation: "Giảm tốc độ, đi sát về bên phải khi xe sau xin vượt.",
        answers: [
            "Khi vượt xe khác.",
            "Khi vượt xe khác tại đoạn đường được phép vượt.",
            "Khi xe sau xin vượt và đảm bảo an toàn.",
            "Khi xe sau có tín hiệu vượt bên phải."
        ],
        correctIdx: 2
    }, {
        title: "Tại các điểm giao cắt giữa đường bộ và đường sắt, quyền ưu tiên thuộc về loại phương tiện nào dưới đây?",
        explanation: "Điểm giao cắt đường sắt thì ưu tiên đường sắt.",
        answers: [
            "Xe cứu hỏa.",
            "Xe cứu thương.",
            "Phương tiện giao thông đường sắt.",
            "Ô tô, mô tô và xe máy chuyên dùng."
        ],
        correctIdx: 2
    }, {
        title: "Các phương tiện tham gia giao thông đường bộ (kể cả những xe có quyền ưu tiên) đều phải dừng lại bên phải đường của mình và trước vạch \"dừng xe\" tại các điểm giao cắt giữa đường bộ và đường sắt khi có báo hiệu dừng nào dưới đây?",
        explanation: "",
        answers: [
            "Hiệu lệnh của nhân viên gác chắn.",
            "Đèn đỏ sáng nháy, cờ đỏ, biển đỏ.",
            "Còi, chuông kêu, chắn đã đóng.",
            "Tất cả các ý trên."
        ],
        correctIdx: 3
    }, {
        title: "Trên đoạn đường bộ giao nhau đồng mức với đường sắt, người không có nhiệm vụ có được tự ý mở chắn đường ngang khi chắn đã đóng hay không?",
        explanation: "",
        answers: [
            "Không được phép.",
            "Được phép nhưng phải đảm bảo an toàn.",
            "Được phép tùy từng hoàn cảnh và điều kiện cụ thể."
        ],
        correctIdx: 0
    }, {
        title: "Tác dụng của mũ bảo hiểm đối với người ngồi trên xe mô tô hai bánh trong trường hợp xảy ra tai nạn giao thông là gì?",
        explanation: "",
        answers: [
            "Để làm đẹp.",
            "Đẻ tránh mưa nắng.",
            "Để giảm thiểu chấn thương vùng đầu.",
            "Để các loại phương tiện khác dễ quan sát."
        ],
        correctIdx: 2
    }, {
        title: "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        explanation: "",
        answers: [
            "Thay đổi tốc độ của xe trên đường bộ.",
            "Thay đổi tay số của xe trên đường bộ.",
            "Lạng lách, đánh võng trên đường bộ."
        ],
        correctIdx: 2
    }, {
        title: "Người lái xe phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường cho các xe nào nêu dưới đây?",
        explanation: "Nhường đường cho xe ưu tiên có tín hiệu còi, cờ, đèn.",
        answers: [
            "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê sau khi thực hiện nhiệm vụ khẩn cấp, không có tín hiệu còi, cờ, đèn theo quy định của pháp luật.",
            "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê đi làm nhiệm vụ khẩn cấp có tín hiệu còi, cờ, đèn theo quy định của pháp luật.",
            "Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn."
        ],
        correctIdx: 1
    }, {
        title: "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải xử lý như thế nào là đúng quy tắc giao thông?",
        explanation: "Xe trên đường không ưu tiên nhường đường cho xe trên đường ưu tiên.",
        answers: [
            "Tăng tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
            "Giảm tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
            "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới."
        ],
        correctIdx: 2
    }, {
        title: "Khi xe ô tô, mô tô đến gần vị trí giao nhau giữa đường bộ và đường sắt không có rào chắn, khi đèn tín hiệu màu đỏ đã bật sáng hoặc khi có tiếng chuông báo hiệu, người lái xe xử lý như thế nào?",
        explanation: "Đứng cách ray đường sắt 5m.",
        answers: [
            "Giảm tốc độ cho xe vượt qua đường sắt.",
            "Nhanh chóng cho xe vượt qua đường sắt trước khi tàu hỏa tới.",
            "Giảm tốc độ cho xe vượt qua đường sắt trước khi tàu hỏa tới.",
            "Cho xe dừng ngay lại và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất."
        ],
        correctIdx: 3
    }, {
        title: "Khi điều khiển xe trên đường vòng, khuất tầm nhìn người lái xe cần phải làm gì để đảm bảo an toàn?",
        explanation: "Không vượt xe khác trên đường vòng, khuất tầm nhìn.",
        answers: [
            "Đi đúng làn đường, đúng tốc độ quy định, không được vượt xe khác.",
            "Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác.",
            "Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe phải xử lý như thế nào khi quan sát phía trước thấy người đi bộ đang sang đường tại nơi có vạch đường dành cho người đi bộ để đảm bảo an toàn?",
        explanation: "Nơi có vạch kẻ đường dành cho người đi bộ thì nhường đường.",
        answers: [
            "Giảm tốc độ, đi từ từ để vượt qua trước người đi bộ.",
            "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng xe để nhường đường cho người đi bộ qua đường.",
            "Tăng tốc độ để vượt qua trước người đi bộ."
        ],
        correctIdx: 1
    }, {
        title: "Khi muốn lùi xe nhưng không quan sát được phía sau, cần làm gì để đảm bảo an toàn?",
        explanation: "Không quan sát được phía sau thì không lùi xe.",
        answers: [
            "Phải lùi thật chậm.",
            "Có thể được lùi xe nhưng phải mở cửa xe.",
            "Không được lùi xe.",
            "Bấm còi 3 lần liên tiếp trước khi lùi."
        ],
        correctIdx: 2
    }, {
        title: "Người điều khiển phương tiện tham gia giao thông đường bộ phải giảm tốc độ để có thể dừng lại một cách an toàn trong các trường hợp nào dưới đây?",
        explanation: "Giảm tốc độ khi có người đi bộ qua đường và qua trạm cảnh sát giao thông.",
        answers: [
            "Khi có người đi bộ, xe lăn của người khuyết tật qua đường; đến gần bến xe buýt, điểm dừng đỗ xe có khách đang lên, xuống xe.",
            "Khi điều khiển phương tiện đi qua khu vực trạm kiểm soát tải trọng xe, trạm cảnh sát giao thông, trạm giao dịch thanh toán đối với các phương tiện sử dụng đường bộ.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Tại những đoạn đường không bố trí biển báo hạn chế tốc độ, không bố trí biển báo khoảng cách an toàn tối thiểu giữa hai xe, người điều khiển phương tiện tham gia giao thông phải thực hiện quy định nào dưới đây để đảm bảo an toàn giao thông?",
        explanation: "Nghiêm chỉnh chấp hành quy định về tốc độ và khoảng cách an toàn.",
        answers: [
            "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe.",
            "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe vào ban đêm.",
            "Người điều khiển phương tiện tham gia giao thông phải nghiêm chỉnh chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu giữa hai xe."
        ],
        correctIdx: 2
    }, {
        title: "Khi tham gia giao thông trên đường cao tốc, người lái xe, người điều khiển xe máy chuyên dùng phải thực hiện như thế nào là đúng quy tắc giao thông?",
        explanation: "Trên cao tốc tuân thủ tốc độ tối thiểu, tối đa và sơn kẻ mặt đường.",
        answers: [
            "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe.",
            "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban ngày.",
            "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban đêm."
        ],
        correctIdx: 0
    }, {
        title: "Theo Luật giao thông đường bộ, tín hiệu đèn giao thông gồm 3 màu nào dưới đây?",
        explanation: "",
        answers: [
            "Đỏ - Vàng - Xanh.",
            "Cam - Vàng - Xanh.",
            "Vàng - Xanh dương - Xanh lá.",
            "Đỏ - Cam - Xanh."
        ],
        correctIdx: 0
    }, {
        title: "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
        explanation: "Đèn vàng dừng lại trước vạch dừng hoặc nhấp nháy thì đi chậm.",
        answers: [
            "Phải cho xe dừng lại trước vạch dừng, trường hợp đã đi quá vạch dừng hoặc đã quá gần vạch dừng nếu dừng lại thấy nguy hiểm thì được đi tiếp.",
            "Trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát nhường đường cho người đi bộ qua đường.",
            "Nhanh chóng tăng tốc độ, vượt qua nút giao và chú ý đảm bảo an toàn.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        title: "Để báo hiệu cho xe phía trước biết xe mô tô của bạn muốn vượt, bạn phải có tín hiệu như thế nào dưới đây?",
        explanation: "Muốn vượt xe thì phải báo hiệu bằng đèn hoặc còi.",
        answers: [
            "Ra tín hiệu bằng tay rồi cho xe vượt qua.",
            "Tăng ga mạnh để gây sự chú ý rồi cho xe vượt qua.",
            "Bạn phải có tín hiệu bằng đèn hoặc còi."
        ],
        correctIdx: 2
    }, {
        title: "Khi tham gia giao thông trên đường cao tốc, người điều khiển phương tiện cơ giới có được dừng, đỗ xe trên phần đường xe chạy hay không?",
        explanation: "Không được dừng, đỗ trên làn xe chạy đường cao tốc.",
        answers: [
            "Được dừng, đỗ.",
            "Không được dừng, đỗ.",
            "Được dừng, đỗ nhưng phải đảm bảo an toàn."
        ],
        correctIdx: 1
    }, {
        title: "Khi xe gặp sự cố kỹ thuật trên đường cao tốc, bạn phải xử lý theo thứ tự như thế nào dưới đây để đảm bảo an toàn giao thông?",
        explanation: "Khi gặp sự cố khi đủ điều kiện an toàn đưa xe vào làn dừng đỗ khẩn cấp.",
        answers: [
            "Bật đèn tín hiệu khẩn cấp, dừng xe ngay lập tức và đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
            "Bật tín hiệu khẩn cấp, lập tức đưa xe vào làn đường xe chạy bên phải trong cùng, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
            "Bật đèn tín hiệu khẩn cấp, khi đủ điều kiện an toàn nhanh chóng đưa xe vào làn dừng đỗ khẩn cấp, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác."
        ],
        correctIdx: 2
    }, {
        title: "Khi người lái xe ô tô dừng, đỗ sát theo lề đường, hè phố phía bên phải theo chiều đi của mình, bánh xe gần nhất không được cách lề đường, hè phố quá bao nhiêu mét trong các trường hợp dưới đây và không gây cản trở, nguy hiểm cho giao thông?",
        explanation: "Dừng xe, đỗ xe cách lề đường, hè phố không quá 0,25 mét.",
        answers: [
            "0,25 mét.",
            "0,3 mét.",
            "0,4 mét.",
            "0,5 mét."
        ],
        correctIdx: 0
    }, {
        title: "Khi dừng, đỗ xe trên đường phố hẹp, người lái xe ô tô phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ bên kia đường khoảng cách tối thiểu là bao nhiêu mét trong các trường hợp dưới đây để đảm bảo an toàn giao thông?",
        explanation: "Dừng xe, đỗ xe trên đường hẹp cách xe khác 20 mét.",
        answers: [
            "5 mét.",
            "10 mét.",
            "15 mét.",
            "20 mét."
        ],
        correctIdx: 3
    }, {
        title: "Trên đường bộ, người lái xe ô tô có được phép dừng xe, đỗ xe song song với một xe khác đang dừng, đỗ hay không?",
        explanation: "Không được dừng, đỗ xe song song với xe khác trên đường.",
        answers: [
            "Được phép.",
            "Không được phép.",
            "Chỉ được phép dừng, đỗ khi đường vắng."
        ],
        correctIdx: 1
    }, {
        title: "Người điều khiển xe mô tô phải giảm tốc độ và hết sức thận trọng  khi qua những đoạn đường nào dưới đây?",
        explanation: "Giảm tốc độ trên đường ướt, đường hẹp và đèo dốc.",
        answers: [
            "Đường ướt, đường có sỏi cát trên nền đường.",
            "Đường hẹp có nhiều điểm giao cắt từ hai phía.",
            "Đường đèo dốc, vòng liên tục.",
            "Tất cả các ý nêu trên."
        ],
        correctIdx: 3
    }, {
        title: "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây để đảm bảo an toàn giao thông?",
        explanation: "Xe buýt đang dừng đón trả khách thì giảm tốc độ và từ từ vượt qua xe buýt.",
        answers: [
            "Tăng tốc độ để nhanh chóng vượt qua bến đỗ.",
            "Giảm tốc độ đến mức an toàn có thể và quan sát người qua đường và từ từ vượt qua xe buýt.",
            "Yêu cầu phải dừng lại phía sau xe buýt chờ xe rời bến mới đi tiếp."
        ],
        correctIdx: 1
    }, {
        title: "Người lái xe khách, xe buýt cần thực hiện những nhiệm vụ gì dưới đây?",
        explanation: "Lái xe khách, xe buýt thực hiện nghiêm biểu đồ chạy xe được phân công.",
        answers: [
            "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện nghiêm biểu đồ xe chạy được phân công; thực hiện đúng hành trình, lịch trình, đón trả khách đúng nơi quy định; giúp đỡ hành khách đi xe, đặc biệt là những người khuyết tật, người già, trẻ em và phụ nữ có thai, có con nhỏ.",
            "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện linh hoạt biểu đồ xe chạy được phân công để tiết kiệm chi phí;  thực hiện đúng hành trình, lịch trình khi có khách đi xe, đón trả khách ở những nơi thuận tiện cho hành khách đi xe."
        ],
        correctIdx: 0
    }, {
        title: "Trong hoạt động vận tải đường bộ, các hành vi nào dưới đây bị nghiêm cấm?",
        explanation: "Nghiêm cấm vận chuyển hàng cấm lưu thông.",
        answers: [
            "Vận chuyển hàng nguy hiểm nhưng có giấy phép.",
            "Vận chuyển động vật hoang dã nhưng thực hiện đủ các quy định có liên quan.",
            "Vận chuyển hàng hóa cấm lưu thông; vận chuyển trái phép hàng nguy hiểm, động vật hoang dã."
        ],
        correctIdx: 2
    }, {
        title: "Trong hoạt động vận tải khách, những hành vi nào dưới đây bị nghiêm cấm?",
        explanation: "Nghiêm cấm đe dọa, xúc phạm, tranh giành, lôi kéo hành khách.",
        answers: [
            "Cạnh tranh nhau nhằm tăng lợi nhuận.",
            "Giảm giá để thu hút khách.",
            "Đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; bắt ép hành khách sử dụng dịch vụ ngoài ý muốn; xuống khách nhằm trốn tránh phát hiện xe chở quá số người quy định.",
            "Tất cả các ý trên."
        ],
        correctIdx: 2
    }, {
        title: "Thời gian làm việc của người lái xe ô tô không được lái xe liên tục quá bao nhiêu giờ trong trường hợp nào dưới đây?",
        explanation: "Không lái xe liên tục quá 4 giờ.",
        answers: [
            "Không quá 4 giờ.",
            "Không quá 6 giờ.",
            "Không quá 8 giờ.",
            "Liên tục tùy thuộc vào sức khỏe và khả năng của người lái xe."
        ],
        correctIdx: 0
    }, {
        title: "Thời gian làm việc trong một ngày của người lái xe ô tô không được vượt quá bao nhiêu giờ trong trường hợp dưới đây?",
        explanation: "Không làm việc 1 ngày của lái xe quá 10 giờ.",
        answers: [
            "Không quá 8 giờ.",
            "Không quá 10 giờ.",
            "Không quá 12 giờ.",
            "Không hạn chế tùy thuộc vào sức khỏe và khả năng của người lái xe."
        ],
        correctIdx: 1
    }, {
        title: "Người lái xe khách phải chấp hành những quy định nào dưới đây?",
        explanation: "Cả ý 1 và ý 2 đều đúng. Bởi vì không thể chở hành khách trên mui được, nên ý 3 sai.",
        answers: [
            "Đón, trả khách đúng nơi quy định, không trở hành khách trên mui, trong khoang hành lý hoặc để hành khách đu bám bên ngoài xe.",
            "Không chở hàng nguy hiểm, hàng có mùi hôi thối hoặc động vật, hàng hóa khác có ảnh hưởng đến sức khỏe của hành khách.",
            "Chở hành khách trên mui; để hàng hóa trong khoang chở khách, chở quá số người theo quy định.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        title: "Lái xe kinh doanh vận tải khách phải có trách nhiệm gì sau đây?",
        explanation: "Cả ý 1 và ý 2 đều đúng. Bởi vì không thể tự do trả khách theo yêu cầu được.",
        answers: [
            "Kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành; kiểm tra việc sắp xếp, chằng buộc hành lý, hàng hóa bảo đảm an toàn.",
            "Đóng cửa lên xuống của xe trước và trong khi xe chạy.",
            "Đón trả khách tại vị trí do khách hàng yêu cầu.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        title: "Người kinh doanh vận tải hành khách có những quyền hạn nào dưới đây?",
        explanation: "Người kinh doanh vận tải không thể tự ý thay đổi vị trí đón, nên đáp án 2 là đáp án đúng.",
        answers: [
            "Tự ý thay đổi vị trí đón, trả khách theo hợp đồng vận chuyển hoặc đón thêm người ngoài danh sách hành khách đã ký.",
            "Từ chối vận chuyển trước khi phương tiện rời bến, rời vị trí đón trả khách theo hợp đồng vận chuyển những người đã có vé hoặc người trong danh sách hợp đồng có hành vi gây rối trật tự công cộng, gây cản trở công việc kinh doanh vận tải, ảnh hưởng đến sức khỏe, tài sản của người khác, gian lận vé hoặc hành khách đang bị dịch bệnh nguy hiểm.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 1
    }, {
        title: "Hành khách có các quyền gì khi đi trên xe ô tô vận tải khách theo tuyến cố định?",
        explanation: "Hành khách được miễn cước hành lý không quá 20kg.",
        answers: [
            "Được vận chuyển theo đúng hợp đồng vận tải, cam kết của người kinh doanh về chất lượng vận tải; được miễn cước hành lý với trọng lượng không quá 20 kg và với kích thước phù hợp với thiết kế của xe; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé theo quy định của Bộ Giao thông vận tải.",
            "Được vận chuyển theo hợp đồng vận tải, cam kết của người kinh doanh về vận tải; được miễn cước hành lý với trọng lượng không quá 50 kg và với kích thước không quá cồng kềnh; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé."
        ],
        correctIdx: 0
    }, {
        title: "Hành khách có các nghĩa vụ gì khi đi trên xe ô tô vận tải hành khách?",
        explanation: "Hành khách không thể mang theo hàng hóa cấm lưu thông nên đáp án 1 là đáp án đúng.",
        answers: [
            "Mua vé và trả cước, phí vận tải hành lý mang theo quá mức quy định; có mặt tại nơi xuất phát đúng thời gian thỏa thuận; chấp hành quy định về vận chuyển; thực hiện đúng hướng dẫn của lái xe, nhân viên phục vụ trên xe về các quy định bảo đảm trật tự, an toàn giao thông.",
            "Được mang theo hành lý, hàng hóa mà pháp luật cấm lưu thông khi đã trả cước, phí vận tải.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Người kinh doanh vận tải hàng hóa có các quyền gì ở dưới đây?",
        explanation: "Người kinh doanh vận tải không thể yêu cầu xếp hàng hóa quá chiều cao quy định hay quá tải trọng nên đáp án 1 là đáp án đúng.",
        answers: [
            "Yêu cầu người thuê vận tải cung cấp thông tin cần thiết về hàng hóa để ghi vào giấy vận chuyển và có quyền kiểm tra tính xác thực của các thông tin đó.",
            "Yêu cầu xếp hàng hóa vận chuyển trên xe vượt quá chiều cao quy định nhưng phải được chằng buộc chắc chắn.",
            "Yêu cầu xếp hàng hóa vượt tải trọng 10%."
        ],
        correctIdx: 0
    }, {
        title: "Người kinh doanh vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
        explanation: "Nghĩa vụ \u001dbồi thường thiệt hại do mất mát, hư hỏng.",
        answers: [
            "Cung cấp phương tiện và thực hiện thời gian, địa điểm giao hàng hóa cho người nhận hàng theo điều kiện của người kinh doanh vận tải; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải phù hợp với quy định của pháp luật.",
            "Bồi thường thiệt hại cho người thuê vận tải do mất mát, hư hỏng hàng hóa xảy ra trong quá trình vận tải từ lúc nhận hàng đến lúc giao hàng; bồi thường thiệt hại do người làm công, người đại diện gây ra trong khi thực hiện công việc được người kinh doanh vận tải giao; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải trái với quy định của pháp luật.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 1
    }, {
        title: "Người thuê vận tải hàng hóa có các quyền hạn gì dưới đây?",
        explanation: "Người thuê vận tải có quyền từ chối nếu phương tiện không đúng thỏa thuận trong hợp đồng.",
        answers: [
            "Từ chối xếp hàng lên phương tiện mà phương tiện đó không đúng thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải giao hàng đúng thời gian, địa điểm đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại theo quy định của pháp luật.",
            "Từ chối xếp hàng hóa lên phương tiện khi thấy phương tiện đó không phù hợp với yêu cầu; yêu cầu người kinh doanh vận tải giao hàng trước thời hạn đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại khi người kinh doanh vận tải gây thiệt hại."
        ],
        correctIdx: 0
    }, {
        title: "Người thuê vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
        explanation: "Người thuê vận tải chuẩn bị đầy đủ giấy tờ hợp pháp về hàng hóa.",
        answers: [
            "Chuẩn bị đầy đủ các giấy tờ hợp pháp về hàng hóa trước khi giao hàng hóa cho người kinh doanh vận tải; đóng gói hàng hóa đúng quy cách, ghi ký hiệu, mã hiệu hàng hóa đầy đủ, rõ ràng; giao hàng hóa cho người kinh doanh vận tải đúng thời gian, địa điểm và nội dung khác ghi trong giấy gửi hàng.",
            "Chuẩn bị đầy đủ các giấy tờ hợp pháp về phương tiện vận chuyển hàng hóa và giao cho người lái xe; xếp hàng hóa lên phương tiện vận chuyển đảm bảo an toàn; giao hàng hóa cho người nhận hàng đúng thời gian, địa điểm.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Người nhận hàng có các quyền gì dưới đây?",
        explanation: "Người nhận hàng có quyền yêu cầu thanh toán chi phí phát sinh do giao hàng chậm.",
        answers: [
            "Nhận và kiểm tra hàng hóa nhận được theo giấy vận chuyển hoặc chứng từ tương đương khác; yêu cầu người kinh doanh vận tải thanh toán chi phí phát sinh do giao hàng hóa chậm.",
            "Yêu cầu hoặc thông báo cho người thuê vận tải để yêu cầu người lái xe bồi thường thiệt hại do mất mát, hư hỏng hàng hóa; nhận hàng hóa không theo giấy vận chuyển hoặc chứng từ tương đương khác.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Người nhận hàng có các nghĩa vụ gì dưới đây?",
        explanation: "Cả 2 ý 1 và 2 đều đúng với nghĩa vụ của người nhận hàng.",
        answers: [
            "Nhận hàng hóa đúng thời gian, địa điểm đã thỏa thuận.",
            "Xuất trình giấy vận chuyển và giấy tờ tùy thân cho người kinh doanh vận tải trước khi nhận hàng hóa; thanh toán chi phí phát sinh do nhận hàng chậm.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Hàng siêu trường, siêu trọng được hiểu như thế nào là đúng?",
        explanation: "Hàng siêu trường, siêu trọng không thể tháo rời.",
        answers: [
            "Là hàng có kích thước vượt quá kích thước và trọng lượng của xe.",
            "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng có thể tháo rời.",
            "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng không thể tháo rời ra được."
        ],
        correctIdx: 2
    }, {
        title: "Việc vận chuyển động vật sống phải tuân theo những quy định nào dưới đây?",
        explanation: "Vận chuyển động vật sống có thể cần chăm sóc và chịu trách nhiệm xếp dỡ động vật sống.",
        answers: [
            "Tùy theo loại động vật sống, người kinh doanh vận tải yêu cầu người thuê vận tải áp tải để chăm sóc trong quá trình vận tải.",
            "Người thuê vận tải chịu trách nhiệm về việc xếp dỡ động vật sống theo hướng dẫn của người kinh doanh vận tải; trường hợp người thuê vận tải không thực hiện được thì phải trả cước, phí xếp, dỡ cho người kinh doanh vận tải.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Xe vận chuyển hàng nguy hiểm phải chấp hành những quy định nào dưới đây?",
        explanation: "Vận chuyển hàng nguy hiểm phải có giấy phép.",
        answers: [
            "Phải có giấy phép do cơ quan có thẩm quyền cấp, xe vận chuyển hàng nguy hiểm không được dừng, đỗ nơi đông người, những nơi dễ xảy ra nguy hiểm.",
            "Phải được chuyên chở trên xe chuyên dùng để vận chuyển hàng nguy hiểm; xe vận chuyển hàng nguy hiểm phải chạy liên tục không được dừng, đỗ trong quá trình vận chuyển.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Trong đô thị, người lái xe buýt, xe chở hàng phải thực hiện những quy định nào dưới đây?",
        explanation: "Xe buýt phải chạy đúng tuyến.",
        answers: [
            "Người lái xe buýt phải chạy đúng tuyến, đúng lịch trình và dừng đỗ đúng nơi quy định; người lái xe chở hàng phải hoạt động đúng tuyến, phạm vi và thời gian quy định đối với từng loại xe.",
            "Người lái xe buýt, xe chở hàng đón, trả khách, hàng hóa theo thỏa thuận giữa hành khách, chủ hàng và người lái xe."
        ],
        correctIdx: 0
    }, {
        title: "Việc vận chuyển hàng hóa bằng xe ô tô phải chấp hành các quy định nào dưới đây?",
        explanation: "Vận chuyển hàng hóa phải xếp đặt gọn hàng và che đậy, không để rơi vãi.",
        answers: [
            "Hàng hóa vận chuyển trên xe phải được sắp xếp gọn gàng và chằng buộc chắc chắn.",
            "Khi vận chuyển hàng rời phải che đậy, không để rơi vãi.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/188.webp"),
        title: "Những ký hiệu hàng hóa dưới đây, ký hiệu nào chống mưa?",
        explanation: "Hình 1 tránh ánh nắng mặt trời; Hình 2 tránh mưa; Hình 3 là hàng dễ vỡ.",
        answers: [
            "Hình 1.",
            "Hình 2.",
            "Hình 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/189.webp"),
        title: "Ký hiệu chuyên dùng nào biểu hiện hàng chuyên chở phải tránh ánh nắng mặt trời?",
        explanation: "Hình 1 tránh ánh nắng mặt trời; Hình 2 tránh mưa.",
        answers: [
            "Hình 1.",
            "Hình 2."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/190.webp"),
        title: "Hình nào dưới đây biểu hiện hàng chuyên chở dễ vỡ phải cẩn thận?",
        explanation: "Hình 1 là hàng dễ vỡ; Hình 2 là hàng chất lỏng.",
        answers: [
            "Hình 1.",
            "Hình 2."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/191.webp"),
        title: "Hình nào dưới đây đòi hỏi hàng phải xếp theo hướng thẳng đứng?",
        explanation: "Hình 1 tránh ánh nắng mặt trời; Hình 2 là hàng dễ vỡ; Hình 3 hàng để thẳng đứng lên.",
        answers: [
            "Hình 1.",
            "Hình 2.",
            "Hình 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/192.webp"),
        title: "Hình nào dưới đây biểu hiện hàng chuyên chở là chất lỏng?",
        explanation: "Hình 1 là hàng dễ vỡ; Hình 2 là hàng chất lỏng.",
        answers: [
            "Hình 1.",
            "Hình 2."
        ],
        correctIdx: 1
    }, {
        title: "Người hành nghề lái xe khi thực hiện tốt việc rèn luyện, nâng cao trách nhiệm, đạo đức nghề nghiệp sẽ thu được kết quả như thế nào dưới đây?",
        explanation: "",
        answers: [
            "Được khách hàng, xã hội tôn trọng; được đồng nghiệp quý mến, giúp đỡ; được doanh nghiệp tin dùng và đóng góp nhiều cho xã hội.",
            "Thu hút được khách hàng, góp phần quan trọng trong xây dựng thương hiệu, kinh doanh có hiệu quả cao.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Người lái xe vận tải hàng hóa cần thực hiện những nhiệm vụ gì ghi ở dưới đây?",
        explanation: "Nhiệm vụ không chở hàng cấm.",
        answers: [
            "Thực hiện nghiêm chỉnh những nội dung hợp đồng giữa chủ phương tiện với chủ hàng trong việc vận chuyển và bảo quản hàng hóa trong quá trình vận chuyển; không chở hàng cấm, không xếp hàng quá trọng tải của xe, quá trọng tải cho phép của cầu, đường; khi vận chuyển hàng hóa quá khổ, quá tải, hàng nguy hiểm, hàng siêu trường, siêu trọng phải có giấy phép.",
            "Thực hiện nghiêm chỉnh những nội dung hợp đồng giữa chủ hàng với khách hàng trong việc vận chuyển và bảo quản hàng hóa trong quá trình vận chuyển; trong trường hợp cần thiết có thể xếp hàng quá trọng tải của xe, quá trọng tải cho phép của cầu theo yêu cầu của chủ hàng; khi vận chuyển hàng hóa quá khổ, quá tải, hàng nguy hiểm, hàng siêu trường, siêu trọng phải được chủ hàng cho phép."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe kinh doanh vận tải cần thực hiện những công việc gì ghi ở dưới đây để thường xuyên rèn luyện nâng cao đạo đức nghề nghiệp?",
        explanation: "",
        answers: [
            "Phải yêu quý xe, quản lý và sử dụng xe tốt; bảo dưỡng xe đúng định kỳ; thực hành tiết kiệm vật tư, nhiên liệu; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong làm việc công nghiệp.",
            "Nắm vững các quy định của pháp luật, tự giác chấp hành pháp luật, lái xe an toàn; coi hành khách như người thân, là đối tác tin cậy; có ý thức tổ chức kỷ luật và xây dựng doanh nghiệp vững mạnh; có tinh thần hơp tác, tương trợ, giúp đỡ đồng nghiệp.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Người lái xe và nhân viên phục vụ trên ô tô vận tải hành khách phải có những trách nhiệm gì theo quy định dưới đây?",
        explanation: "",
        answers: [
            "Kiểm tra các điều kiện bảo đảm an toàn của xe sau khi khởi hành; có trách nhiệm lái xe thật nhanh khi chậm giờ của khách.",
            "Kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành; có thái độ văn minh, lịch sự, hướng dẫn hành khách ngồi đúng nơi quy định; kiểm tra việc sắp xếp, chằng buộc hành lý, bảo đảm an toàn.",
            "Có biện pháp bảo vệ tính mạng, sức khỏe, tài sản của hành khách đi xe, giữ gìn trật tự; vệ sinh trong xe; đóng cửa lên xuống của xe trước và trong khi xe chạy.",
            "Cả ý 2 và ý 3."
        ],
        correctIdx: 3
    }, {
        title: "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
        explanation: "",
        answers: [
            "Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông; là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
            "Là ứng xử có văn hóa, có tình yêu thương con người trong các tình huống không may xảy ra khi tham gia giao thông.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Trên làn đường dành cho ô tô có vũng nước lớn, có nhiều người đi xe mô tô trên làn đường bên cạnh, người lái xe ô tô xử lý như thế nào là có văn hóa giao thông?",
        explanation: "",
        answers: [
            "Cho xe chạy thật nhanh qua vũng nước.",
            "Giảm tốc độ cho xe chạy chậm qua vũng nước.",
            "Giảm tốc độ cho xe chạy qua làn đường dành cho mô tô để tránh vũng nước."
        ],
        correctIdx: 1
    }, {
        title: "Người lái xe cố tình không phân biệt làn đường, vạch phân làn, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm, đường một chiều được coi là hành vi nào trong các hành vi dưới đây?",
        explanation: "",
        answers: [
            "Là bình thường.",
            "Là thiếu văn hóa giao thông.",
            "Là có văn hóa giao thông."
        ],
        correctIdx: 1
    }, {
        title: "Khi sơ cứu người bị tai nạn giao thông đường bộ, có vết thương chảy máu ngoài, màu đỏ tươi phun thành tia và phun mạnh khi mạch đập, bạn phải làm gì dưới đây?",
        explanation: "",
        answers: [
            "Thực hiện cầm máu trực tiếp.",
            "Thực hiện cầm máu không trực tiếp (chặn động mạch)."
        ],
        correctIdx: 1
    }, {
        title: "Người lái xe có văn hóa khi tham gia giao thông phải đáp ứng các điều kiện nào dưới đây?",
        explanation: "",
        answers: [
            "Có trách nhiệm với bản thân và với cộng đồng; tôn trọng, nhường nhịn người khác.",
            "Tận tình giúp đỡ người tham gia giao thông gặp hoạn nạn; giúp đỡ người khuyết tật, trẻ em và người cao tuổi.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
        explanation: "",
        answers: [
            "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, chỉ đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
            "Chấp hành quy định về tốc độ, đèn tín hiệu, biển báo hiệu, vạch kẻ đường khi lái xe; chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông; nhường đường cho người đi bộ, người già, trẻ em và người khuyết tật.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 1
    }, {
        title: "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
        explanation: "",
        answers: [
            "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách.",
            "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
            "Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm."
        ],
        correctIdx: 0
    }, {
        title: "Trong các hành vi dưới đây, người lái xe ô tô, mô tô có văn hóa giao thông phải ứng xử như thế nào?",
        explanation: "",
        answers: [
            "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
            "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
            "Dừng và đỗ xe ở nơi thuận tiện cho việc chuyên chở hành khách và giao nhận hàng hóa; sử dụng rượu, bia thì có thể lái xe."
        ],
        correctIdx: 0
    }, {
        title: "Người có văn hóa giao thông khi điều khiển xe cơ giới tham gia giao thông đường bộ phải đảm bảo các điều kiện gì dưới đây?",
        explanation: "",
        answers: [
            "Có giấy phép lái xe phù hợp với loại xe được phép điều khiển; xe cơ giới đảm bảo các quy định về chất ượng, an toàn kỹ thuật và bảo vệ môi trường.",
            "Có giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới còn hiệu lực; nộp phí sử dụng đường bộ theo quy định.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Khi xảy ra tai nạn giao thông, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
        explanation: "",
        answers: [
            "Đặt các biển cảnh báo hoặc vật báo hiệu ở phía trước và phía sau hiện trường xảy ra tai nạn để cảnh báo; kiểm tra khả năng xảy ra hỏa hoạn do nhiên liệu bị rò rỉ; bảo vệ hiện trường vụ tai nạn và cấp cứu người bị thương.",
            "Đặt các biển cảnh báo hoặc vật báo hiệu ở phía trên nóc xe xảy ra tai nạn để cảnh báo; kiểm tra khả năng xảy ra mất an toàn do nước làm mát bị rò rỉ.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Khi xảy ra tai nạn giao thông, có người bị thương nghiêm trọng, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
        explanation: "",
        answers: [
            "Thực hiện sơ cứu ban đầu trong trường hợp khẩn cấp; thông báo vụ tai nạn đến cơ quan thi hành pháp luật.",
            "Nhanh chóng lái xe gây tai nạn hoặc đi nhờ xe khác ra khỏi hiện trường vụ tai nạn.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Khi sơ cứu ban đầu cho người bị tai nạn giao thông đường bộ không còn hô hấp, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
        explanation: "",
        answers: [
            "Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân.",
            "Thực hiện các biện pháp hô hấp nhân tạo.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?",
        explanation: "",
        answers: [
            "Không bị nghiêm cấm.",
            "Nghiêm cấm tùy từng trường hợp cụ thể.",
            "Bị nghiêm cấm."
        ],
        correctIdx: 2
    }, {
        title: "Khi xảy ra tai nạn giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        explanation: "",
        answers: [
            "Xâm phạm tính mạng, sức khỏe, tài sản của người bị tai nạn và người gây tai nạn.",
            "Bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Khi xảy ra tai nạn giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        explanation: "",
        answers: [
            "Xâm phạm tính mạng, sức khỏe, tài sản của người bị nạn và người gây tai nạn.",
            "Sơ cứu người bị nạn khi cơ quan có thẩm quyền chưa cho phép.",
            "Sơ cứu người gây tai nạn khi cơ quan có thẩm quyền chưa cho phép."
        ],
        correctIdx: 0
    }, {
        title: "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô hai bánh có văn hóa giao thông sẽ lựa chọn xử lý tình huống nào dưới đây?",
        explanation: "",
        answers: [
            "Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
            "Điều khiển xe lên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
            "Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều để nút tắc nhanh chóng được giải tỏa."
        ],
        correctIdx: 2
    }, {
        title: "Trên đường đang xảy ra ùn tắc những hành vi nào sau đây là thiếu văn hóa khi tham gia giao thông?",
        explanation: "",
        answers: [
            "Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường.",
            "Đi lên vỉa hè, tận dụng mọi khoảng trống để nhanh chóng thoát khỏi nơi ùn tắc.",
            "Lấn sang trái đường cố gắng vượt lên xe khác.",
            "Tất cả các ý nêu trên."
        ],
        correctIdx: 3
    }, {
        title: "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        explanation: "Xe mô tô xuống dốc dài cần sử dụng cả phanh trước và phanh sau để giảm tốc độ.",
        answers: [
            "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
            "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
            "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe."
        ],
        correctIdx: 0
    }, {
        title: "Khi vào số để khởi hành xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
        explanation: "Khởi hành xe ô tô số tự động cần đạp phanh chân hết hành trình.",
        answers: [
            "Đạp bàn đạp phanh chân hết hành trình, vào số và nhả phanh tay, kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
            "Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh."
        ],
        correctIdx: 0
    }, {
        title: "Khi nhả hệ thống phanh dừng cơ khí điều khiển bằng tay (phanh tay), người lái xe cần phải thực hiện các thao tác nào?",
        explanation: "Thực hiện \u001dphanh tay cần phải bóp khóa hãm đẩy cần phanh tay về phía trước.",
        answers: [
            "Dùng lực tay phải kéo cần phanh tay về phía sau hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm.",
            "Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm.",
            "Dùng lực tay phải đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm."
        ],
        correctIdx: 1
    }, {
        title: "Khi khởi hành ô tô sử dụng hộp số cơ khí trên đường bằng, người lái xe cần thực hiện các thao tác nào theo trình tự dưới đây?",
        explanation: "Khởi hành ô tô sử dụng hộp số đạp côn hết hành trình; vào số 1.",
        answers: [
            "Kiểm tra an toàn xung quanh xe ô tô; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp (côn) và giữ trong khoảng 3 giây; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát, sau đó vừa tăng ga vừa nhả hết ly hợp để cho xe ô tô chuyển động.",
            "Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp và giữ trong khỏang 3 giây, sau đó vừa tăng ga vừa nhả hết ly hợp (côn) để cho xe ô tô chuyển động."
        ],
        correctIdx: 1
    }, {
        title: "Khi quay đầu xe, người lái xe cần phải quan sát và thực hiện các thao tác nào để đảm bảo an toàn giao thông?",
        explanation: "Thực hiện quay đầu xe với tốc độ thấp.",
        answers: [
            "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm đưa đuôi xe về phía an toàn.",
            "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe; quay đầu xe với tốc độ tối đa; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đuôi xe về phía nguy hiểm và đầu xe về phía an toàn."
        ],
        correctIdx: 0
    }, {
        title: "Khi tránh nhau trên đường hẹp, người lái xe cần phải chú ý những điểm nào để đảm bảo an toàn giao thông?",
        explanation: "Cả ý 1 và ý 2 đều đúng. Ý 3 tránh nhau ban đêm bật đèn pha là sai.",
        answers: [
            "Không nên đi cố vào đường hẹp; xe đi ở phía sườn núi nên dừng lại trước để nhường đường; khi dừng xe nhường đường phải đỗ ngay ngắn.",
            "Trong khi tránh nhau không nên đổi số; khi tránh nhau ban đêm, phải tắt đèn pha bật đèn cốt.",
            "Khi tránh nhau ban đêm, phải thường xuyên bật đèn pha tắt đèn cốt.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        title: "Khi điều khiển ô tô lên dốc cao, người lái xe cần thực hiện các thao tác nào?",
        explanation: "Ô tô lên dốc cao cần về số thấp từ chân dốc.",
        answers: [
            "Tăng lên số cao từ chân dốc, điều chỉnh ga cho xe nhanh lên dốc; đến gần đỉnh dốc phải tăng ga để xe nhanh chóng qua dốc; về số thấp, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
            "Về số thấp từ chân dốc, điều chỉnh ga cho xe từ từ lên dốc; đến gần đỉnh dốc phải đi chậm, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết."
        ],
        correctIdx: 1
    }, {
        title: "Khi điều khiển ô tô xuống dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        explanation: "Ô tô xuống dốc cao cần về số thấp.",
        answers: [
            "Tăng lên số cao, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
            "Về số thấp, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
            "Về số không (0), nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ."
        ],
        correctIdx: 1
    }, {
        title: "Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        explanation: "Khi xuống dốc muốn dừng xe thì có tín hiệu rẽ phải, điều khiển xe vào lề đường bên phải.",
        answers: [
            "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp nửa ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân và kéo phanh tay.",
            "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân.",
            "Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, kéo phanh tay."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để đảm bảo an toàn?",
        explanation: "Điều khiển xe trên đường vòng cần giảm tốc độ.",
        answers: [
            "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng coi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
            "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe ô tô rẽ phải ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        explanation: "Điều khiển xe rẽ phải thì bám sát vào phía phải đường và giảm tốc độ.",
        answers: [
            "Có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe sang làn đường bên trái; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
            "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
            "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; tăng tốc độ và quan sát an toàn phía bên trái để điều khiển xe qua chỗ đường giao nhau."
        ],
        correctIdx: 1
    }, {
        title: "Khi điều khiển xe ô tô rẽ trái ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        explanation: "Điều khiển xe rẽ trái thì giảm tốc độ.",
        answers: [
            "Cách chỗ rẽ một khoảng cách an toàn giảm tốc độ, có tín hiệu rẽ trái xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái; cho xe chạy chậm tới phía trong của tâm đường giao nhau mới rẽ trái để điều khiển xe qua chỗ đường giao nhau.",
            "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái, tăng tốc độ để xe nhanh chóng qua chỗ đường giao nhau; có tín hiệu xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi làn đường sang phải để mở rộng vòng cua."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe sử dụng hộp số cơ khí vượt qua rãnh lớn cắt ngang mặt đường, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        explanation: "Điều khiển xe số tay qua rãnh lớn thì gài số một (1), và không tăng số cho đến khi qua khỏi rãnh.",
        answers: [
            "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tăng số, tăng tốc độ để bánh xe sau vượt qua rãnh.",
            "Tăng ga, tăng số để hai bánh xe trước và bánh xe sau vượt qua khỏi rãnh và chạy bình thường.",
            "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh."
        ],
        correctIdx: 2
    }, {
        title: "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        explanation: "",
        answers: [
            "Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
            "Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe cần phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ và không thay đổi số trong quá trình vượt qua đường sắt để tránh động cơ chết máy cho xe cho vượt qua.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Khi điều khiển xe ô tô tự đổ, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
        explanation: "Xe ben khi đang chạy thì phải hạ hết thùng xe xuống nên ý 2 là sai. Cả ý 1 và ý 3 đều đúng.",
        answers: [
            "Khi chạy trên đường xấu, nhiều ổ gà nên chạy chậm để thùng xe không bị lắc mạnh, không gây hiện tượng lệch \"ben\"; khi chạy vào đường vòng, cần giảm tốc độ, không lấy lái gấp và không phanh gấp.",
            "Khi chạy trên đường quốc lộ, đường bằng phẳng không cần hạ hết thùng xe xuống.",
            "Khi đổ hàng phải chọn vị trí có nền đường cứng và phẳng, dừng hẳn xe, kéo chặt phanh tay; sau đó mới điều khiển cơ cấu nâng \"ben\" để đổ hàng, đổ xong hàng mới hạ thùng xuống.",
            "Cả ý 1 và ý 3."
        ],
        correctIdx: 3
    }, {
        title: "Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
        explanation: "Không được nhìn xuống buồng lái khi tăng số.",
        answers: [
            "Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.",
            "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, vù ga phải phù hợp với tốc độ."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe giảm số, người lái xe cần phải chú ý những điểm gì để đảm bảo an toàn?",
        explanation: "Không được nhìn xuống buồng lái khi giảm số.",
        answers: [
            "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng, chính xác.",
            "Không được nhìn xuống buồng lái, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng, chính xác, vù ga phải phù hợp với tốc độ."
        ],
        correctIdx: 1
    }, {
        title: "Để giảm tốc độ khi ô tô đi xuống đường dốc dài, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
        explanation: "Để giảm tốc độ khi ô tô xuống dốc dài thì về số thấp phù hợp, nhả bàn đạp ga, đạp phanh chân phù hợp.",
        answers: [
            "Nhả bàn đạp ga, đạp ly hợp (côn) hết hành trình, đạp mạnh phanh chân để giảm tốc độ.",
            "Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
            "Nhả bàn đạp ga, tăng lên số cao, đạp phanh chân với mức độ phù hợp để giảm tốc độ."
        ],
        correctIdx: 1
    }, {
        title: "Khi điều khiển ô tô qua đường ngập nước, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        explanation: "Điều khiển ô tô qua đường ngập nước thì về số thấp, giữ đều ga.",
        answers: [
            "Tăng lên số cao, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
            "Đạp ly hợp (côn) hết hành trình, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
            "Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước."
        ],
        correctIdx: 2
    }, {
        title: "Khi điều khiển xe ô tô tới gần xe chạy ngược chiều vào ban đêm, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        explanation: "Điều khiển ô tô ban đêm tới gần xe ngược chiều thì chuyển đèn sang chiếu gần, không nhìn vào đèn xe ngược chiều.",
        answers: [
            "Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
            "Chuyển từ đèn chiếu gần sang đèn chiếu xa; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
            "Chuyển từ đèn chiếu xa sang đèn chiếu gần; nhìn thẳng vào đèn của xe chạy ngược chiều để tránh xe đảm bảo an toàn."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe ô tô trên đường trơn cần chú ý những điểm gì để đảm bảo an toàn?",
        explanation: "Điều khiển ô tô qua đường trơn thì không đánh lái ngoặt và phanh gấp.",
        answers: [
            "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, giữ đều ga, đánh lái ngoặt và phanh gấp khi cần thiết.",
            "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm (sử dụng số L hoặc 1, 2 đối với xe số tự động), gài cần (nếu có), giữ đều ga, không lấy nhiều lái, không đánh lái ngoặt và phanh gấp."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/235.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "BRAKE thì phanh tay đang hãm hoặc thiếu dầu phanh.",
        answers: [
            "Phanh tay đang hãm hoặc thiếu dầu phanh.",
            "Nhiệt độ nước làm mát quá mức cho phép.",
            "Cửa xe đang mở."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/236.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "",
        answers: [
            "Phanh tay đang hãm.",
            "Thiếu dầu phanh.",
            "Nhiệt độ nước làm mát tăng quá mức cho phép.",
            "Dầu bôi trơn bị thiếu."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/237.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "",
        answers: [
            "Cửa xe đóng chưa chặt hoặc có cửa xe chưa đóng.",
            "Bộ nạp ắc quy gặp sự cố kỹ thuật.",
            "Dầu bôi trơn bị thiếu.",
            "Cả ý 2 và ý 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/238.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "",
        answers: [
            "Thiếu dầu phanh, phanh tay đang hãm.",
            "Hệ thống túi khí an toàn gặp sự cố.",
            "Lái xe và người ngồi ghế trước chưa cài dây an toàn.",
            "Cửa đóng chưa chặt, có cửa chưa đóng."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/239.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "",
        answers: [
            "Báo hiệu thiếu dầu phanh.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Sắp hết nhiên liệu."
        ],
        correctIdx: 3
    }, {
        title: "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
        explanation: "",
        answers: [
            "Xăng và dầu diesel.",
            "Xăng sinh học và khí sinh học.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 1
    }, {
        title: "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
        explanation: "Để tiết kiệm nhiên liệu thì bảo dưỡng định kỳ và kiểm tra áp suất lốp.",
        answers: [
            "Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi xe chạy.",
            "Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Khi đã đỗ xe ô tô sát lề đường bên phải, người lái xe phải thực hiện các thao tác nào dưới đây khi mở cửa xuống xe để đảm bảo an toàn?",
        explanation: "Mở cửa xe thì quan sát rồi mới mở hé cánh cửa.",
        answers: [
            "Quan sát tình hình giao thông phía trước và sau, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
            "Mở cánh cửa và quan sát tình hình giao thông phía trước, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
            "Mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô."
        ],
        correctIdx: 0
    }, {
        title: "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điêu khiển giao thông, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
        explanation: "Lái xe ô tô qua đường sắt không rào chắn thì cách 5 mét hạ kính cửa, tắt âm thanh, quan sát.",
        answers: [
            "Tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát, nếu không có tàu chạy qua, về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua.",
            "Tại vị trí cách đường sắt tối thiểu 5 mét quan sát phía trước., nếu tàu còn cách xa, tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt."
        ],
        correctIdx: 0
    }, {
        title: "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe thực hiện thao tác: tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát và nếu không có tàu chạy qua thì về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua để đảm bảo an toàn là đúng hay không?",
        explanation: "Lái xe ô tô qua đường sắt không rào chắn thì cách 5 mét hạ kính cửa, tắt âm thanh, quan sát.",
        answers: [
            "Không đúng.",
            "Đúng.",
            "Không cần thiết, vì nếu nhìn thấy tàu còn cách xa, người lái xe có thể tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt."
        ],
        correctIdx: 1
    }, {
        title: "Khi điều khiển xe ô tô có hộp số tự động đi vào đường trơn trượt, lầy lội, người lái xe phải xử lý như thế nào để đảm bảo an toàn trong các trường hợp dưới đây?",
        explanation: "Điều khiển xe tự động vào đường trơn trượt thì về số thấp, kết hợp phanh chân.",
        answers: [
            "Về số thấp, kết hợp phanh chân để giảm tốc độ.",
            "Giữ nguyên tay số D, kết hợp phanh tay để giảm tốc độ.",
            "Về số N (số 0), kết hợp phanh chân để giảm tốc độ."
        ],
        correctIdx: 0
    }, {
        title: "Khi động cơ ô tô đã khởi động, muốn điều chỉnh ghế của người lái, người lái xe phải để cần số ở vị trí nào?",
        explanation: "Điều chỉnh ghế thì cần số ở P hoặc N.",
        answers: [
            "Vị trí N hoặc vị trí P hoặc số 0.",
            "Vị trí D hoặc số 1.",
            "Vị trí R."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe ô tô có hộp số tự động, người lái xe sử dụng chân như thế nào là đúng để đảm bảo an toàn?",
        explanation: "Điều khiển xe số tự động không sử dụng chân trái.",
        answers: [
            "Không sử dụng chân trái; chân phải điều khiển bàn đạp phanh và bàn đạp ga.",
            "Chân trái điều khiển bàn đạp phanh, chân phải điều khiển bàn đạp ga.",
            "Không sử dụng chân phải; chân trái điều khiển bàn đạp phanh và bàn đạp ga."
        ],
        correctIdx: 0
    }, {
        title: "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào?",
        explanation: "Tầm nhìn bị hạn chế thì giảm tốc độ.",
        answers: [
            "Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng.",
            "Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
            "Tăng tốc độ, bật đèn pha vượt qua xe chạy trước."
        ],
        correctIdx: 1
    }, {
        title: "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào để đảm bảo an toàn?",
        explanation: "Đèn pha xe ngược chiều gây chói mắt thì giảm tốc độ.",
        answers: [
            "Giảm tốc độ, nếu cần thiết có thể dừng xe lại.",
            "Bật đèn pha chiếu xa và giữ nguyên tốc độ.",
            "Tăng tốc độ, bật đèn pha đối diện xe phía trước."
        ],
        correctIdx: 0
    }, {
        title: "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
        explanation: "Khi phanh xe mô tô thì giảm hết ga.",
        answers: [
            "Sử dụng phanh trước.",
            "Sử dụng phanh sau.",
            "Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước."
        ],
        correctIdx: 2
    }, {
        title: "Khi lái xe ô tô trên mặt đường có nhiều \"ổ gà\", người lái xe phải thực hiện thao tác như thế nào để đảm bảo an toàn?",
        explanation: "Lái xe trên đường có nhiều ổ gà thì giảm tốc độ.",
        answers: [
            "Giảm tốc độ, về số thấp và giữ đều ga.",
            "Tăng tốc độ cho xe lướt qua nhanh.",
            "Tăng tốc độ, đánh lái liên tục để tránh \"ổ gà\"."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe ô tô gặp mưa to hoặc sương mù, người lái xe phải làm gì để đảm bảo an toàn?",
        explanation: "Điều khiển ô tô gặp mưa to thì chạy tốc độ chậm.",
        answers: [
            "Bật đèn chiếu gần và đèn vàng, điều khiển gạt nước, điều khiển ô tô đi với tốc độ chậm để có thể quan sát được; tìm chỗ an toàn dừng xe, bật đèn dừng khẩn cấp báo hiệu cho các xe khác biết.",
            "Bật đèn chiếu xa và đèn vàng, điều khiển gạt nước, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa hoặc sương mù.",
            "Tăng tốc độ, bật đèn pha vượt qua xe chạy phía trước."
        ],
        correctIdx: 0
    }, {
        title: "Điều khiển xe ô tô trong trời mưa, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
        explanation: "Điều khiển ô tô trong trời mưa thì giảm tốc độ.",
        answers: [
            "Giảm tốc độ, tăng cường quan sát, không nên phanh gấp, không nên tăng ga hay đánh vô lăng đột ngột, bật đèn pha gần, mở chế độ gạt nước ở chế độ phù hợp để đảm bảo quan sát.",
            "Phanh gấp khi xe đi vào vũng nước và tăng ga ngay sau khi ra khỏi vũng nước.",
            "Bật đèn chiếu xa, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa."
        ],
        correctIdx: 0
    }, {
        title: "Khi lùi xe, người lái xe phải xử lý như thế nào để đảm bảo an toàn giao thông?",
        explanation: "Lùi xe thì cần quan sát phía sau xe.",
        answers: [
            "Quan sát bên trái, bên phải, phía sau xe, có tín hiệu cần thiết và lùi xe với tốc độ phù hợp.",
            "Quan sát phía trước xe và lùi xe với tốc độ nhanh.",
            "Quan sát bên trái và phía trước của xe và lùi xe với tốc độ nhanh."
        ],
        correctIdx: 0
    }, {
        title: "Điều khiển xe ô tô trong khu vực đông dân cư cần lưu ý điều gì dưới đây?",
        explanation: "Điều khiển xe ô tô trong khu vực đông dân cư thì giảm tốc độ và đi đúng làn đường.",
        answers: [
            "Giảm tốc độ đến mức an toàn, quan sát, nhường đường cho người đi bộ; giữ khoảng cách an toàn với các xe phía trước.",
            "Đi đúng làn đường quy định; chỉ được chuyển làn đường ở nơi cho phép, nhưng phải quan sát.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Khi điều khiển xe ô tô nhập vào đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để đảm bảo an toàn giao thông?",
        explanation: "Khi lái xe nhập vào làn đường cao tốc thì nhường đường cho xe đang trên đường cao tốc.",
        answers: [
            "Quan sát, phát tín hiệu và lái xe nhập vào làn đường tăng tốc, nhường đường cho các xe đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì tăng tốc độ cho xe nhập vào làn đường cao tốc.",
            "Phát tín hiệu, quan sát các xe đang chạy phía trước, nếu đảm bảo các điều kiện an toàn thì tăng tốc độ cho xe nhập ngay vào làn đường cao tốc.",
            "Phát tín hiệu và lái xe nhập vào làn đường tăng tốc, quan sát các xe phía sau đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì giảm tốc độ, từ từ cho xe nhập vào làn đường cao tốc."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe ô tô ra khỏi đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để đảm bảo an toàn giao thông?",
        explanation: "Điều khiển xe ra khỏi làn cao tốc thì không được phép lùi xe, nên đáp án 2 là sai.",
        answers: [
            "Quan sát phía trước để tìm biển báo chỉ dẫn \"Lối ra đường cao tốc\", kiểm tra tình trạng giao thông phía sau và bên phải, nếu đảm bảo điều kiện an toàn thì phát tín hiệu và điều khiển xe chuyển dần sang làn đường giảm tốc và ra khỏi đường cao tốc.",
            "Quan sát phía trước để tìm biển báo chỉ dẫn \"Lối ra đường cao tốc\", trường hợp vượt qua \"Lối ra đường cao tốc\" thì phát tín hiệu, di chuyển sang làn đường giảm tốc và lùi xe quay trở lại."
        ],
        correctIdx: 0
    }, {
        title: "Người lái xe được dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc trong trường hợp nào dưới đây?",
        explanation: "Trên cao tốc chỉ được dừng xe ở làn khẩn cấp khi xe gặp sự cố.",
        answers: [
            "Xe gặp sự cố, tai nạn, hoặc trường hợp khẩn cấp không thể di chuyển bình thường.",
            "Để nghỉ ngơi, đi vệ sinh, chụp ảnh, làm việc riêng...",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Trong trường hợp bất khả kháng, khi dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc người lái xe phải xử lý như thế nào dưới đây là đúng quy tắc giao thông?",
        explanation: "",
        answers: [
            "Bật đèn cảnh báo sự cố, di chuyển phương tiện đến vị trí sát lề đường.",
            "Sử dụng các thiết bị cảnh báo như chóp nón, biển báo, đèn chớp... đặt phía sau xe để cảnh báo các phương tiện khác.",
            "Gọi số điện thoại khẩn cấp của đường cao tốc để được hỗ trợ nếu xe gặp sự cố, tai nạn hoặc các trường hợp khẩn cấp không thể di chuyển bình thường.",
            "Tất cả các ý nêu trên."
        ],
        correctIdx: 3
    }, {
        title: "Khi điều khiển ô tô xuống đường dốc dài, độ dốc cao, người lái xe số tự động cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        explanation: "Điều khiển ô tô số tự động xuống dốc dài thì nhả bàn đạp ga, về số thấp.",
        answers: [
            "Nhả bàn đạp ga, về số thấp (sử dụng số L hoặc 1, 2), đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
            "Nhả bàn đạp ga, về số không (N) đạp phanh chân và kéo phanh tay để giảm tốc độ."
        ],
        correctIdx: 0
    }, {
        title: "Khi đi từ đường nhánh ra đường chính, người lái xe phải xử lý như thế nào là đúng quy tắc giao thông?",
        explanation: "Đi từ đường nhánh ra đường chính thì giảm tốc độ, nhường đường cho xe trên đường chính.",
        answers: [
            "Giảm tốc độ, nhường đường cho xe trên đường chính từ bất kỳ hướng nào tới.",
            "Nháy đèn, bấm còi để xe đi trên đường chính biết và tăng tốc độ cho xe đi ra đường chính.",
            "Quan sát xe đang đi trên đường chính, nếu là xe có kích thước lớn hơn thì nhường đường, xe có kích thước nhỏ hơn thì tăng tốc độ cho xe đi ra đường chính."
        ],
        correctIdx: 0
    }, {
        title: "Khi đang lái xe mô tô và ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
        explanation: "Khi cần nghe điện thoại thì giảm tốc độ và dừng xe ở nơi cho phép dừng xe.",
        answers: [
            "Giảm tốc độ để đảm bảo an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
            "Giảm tốc độ để dừng xe ở nơi cho phép dừng xe sau đó sử dụng điện thoại để liên lạc.",
            "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc."
        ],
        correctIdx: 1
    }, {
        title: "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
        explanation: "Xe mô tô tay ga chỉ sử dụng phanh trước thì rất nguy hiểm.",
        answers: [
            "Sử dụng còi.",
            "Phanh đồng thời cả phanh trước và phanh sau.",
            "Chỉ sử dụng phanh trước."
        ],
        correctIdx: 2
    }, {
        title: "Người ngồi trên xe ô tô cần thực hiện những thao tác mở cửa như thế nào dưới đây để xuống xe một cách an toàn?",
        explanation: "Mở cửa xe thì quan sát rồi mới mở hé cánh cửa.",
        answers: [
            "Quan sát gương chiếu hậu hoặc xoay người quan sát phía trước và phía sau để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, dùng tay cách xa cửa hơn mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.",
            "Quan sát tình hình giao thông phía trước, không cần quan sát phía sau và bên mở cửa; mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô."
        ],
        correctIdx: 0
    }, {
        title: "Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để đảm bảo an toàn?",
        explanation: "",
        answers: [
            "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
            "Chỉ quay đầu xe tại những nơi được phép quay đầu.",
            "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
            "Tất cả các ý nêu trên."
        ],
        correctIdx: 3
    }, {
        title: "Tay ga trên xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
        explanation: "",
        answers: [
            "Để điều khiển xe chạy về phía trước.",
            "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
            "Để điều khiển xe chạy lùi.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        title: "Gương chiếu hậu của xe mô tô hai bánh, có tác dụng gì trong các trường hợp dưới đây?",
        explanation: "",
        answers: [
            "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
            "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
            "Để quan sát an toàn phía sau cả bên trái và bên phải trước khi chuyển hướng.",
            "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
        ],
        correctIdx: 2
    }, {
        title: "Để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?",
        explanation: "",
        answers: [
            "Tăng ga thật mạnh, giảm ga từ từ.",
            "Tăng ga thật mạnh, giảm ga thật nhanh.",
            "Tăng ga từ từ, giảm ga thật nhanh.",
            "Tăng ga từ từ, giảm ga từ từ."
        ],
        correctIdx: 2
    }, {
        title: "Kỹ thuật cơ bản để giữ thăng bằng khi điều khiển xe mô tô đi trên đường gồ ghề như thế nào trong các trường hợp dưới đây?",
        explanation: "",
        answers: [
            "Đứng thẳng trên giá gác chân lái sau đó hơi gập đầu gối và khủy tay, đi chậm để không nẩy quá mạnh.",
            "Ngồi lùi lại phía sau, tăng ga vượt nhanh qua đoạn đường xóc.",
            "Ngồi lệch sang bên trái hoặc bên phải để lấy thăng bằng qua đoạn đường gồ ghề."
        ],
        correctIdx: 0
    }, {
        title: "Chủ phương tiện cơ giới đường bộ có được tự ý thay đổi màu sơn, nhãn hiệu hoặc các đặc tính kỹ thuật của phương tiện so với chứng nhận đăng ký xe hay không?",
        explanation: "Không được phép thay đổi so với giấy chứng nhận đăng ký xe.",
        answers: [
            "Được phép thay đổi bằng cách dán đề can với màu sắc phù hợp.",
            "Không được phép thay đổi.",
            "Tùy từng loại phương tiện cơ giới đường bộ."
        ],
        correctIdx: 1
    }, {
        title: "Xe ô tô tham gia giao thông đường bộ phải bảo đảm các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường nào ghi dưới đây?",
        explanation: "",
        answers: [
            "Kính chắn gió, kính cửa phải là loại kính an toàn, bảo đảm tần nhìn cho người điều khiển; có đủ hệ thống hãm và hệ thống chuyển hướng có hiệu lực, tay lái xe ô tô ở bên trái của xe, có còi với âm lượng đúng quy chuẩn kỹ thuật.",
            "Có đủ đèn chiếu sáng gần và xa, đèn soi biển số, đèn báo hãm, đèn tín hiệu; có đủ bộ phận giảm thanh, giảm khói, các kết cấu phải đủ độ bền và bảo đảm tính năng vận hành ổn định.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Xe mô tô và xe ô tô tham gia giao thông trên đường bộ phải bắt buộc có đủ bộ phận giảm thanh không?",
        explanation: "",
        answers: [
            "Không bắt buộc.",
            "Bắt buộc.",
            "Tùy từng trường hợp."
        ],
        correctIdx: 1
    }, {
        title: "Xe ô tô tham gia giao thông trên đường bộ phải có đủ các loại đèn gì dưới đây?",
        explanation: "",
        answers: [
            "Đèn chiếu sáng gần và xa.",
            "Đèn soi biển số, đèn báo hãm và đèn tín hiệu.",
            "Dàn đèn pha trên nóc xe.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        title: "Kính chắn gió của xe ô tô phải đảm bảo yêu cầu nào dưới đây?",
        explanation: "Yêu cầu của kính chắn gió, chọn “Loại kính an toàn“.",
        answers: [
            "Là loại kính an toàn, kính nhiều lớp, đúng quy cách, không rạn nứt, đảm bảo hình ảnh quan sát rõ ràng, không bị méo mó.",
            "Là loại kính trong suốt, không rạn nứt, đảm bảo tầm nhìn cho người điều khiển về phía trước mặt và hai bên."
        ],
        correctIdx: 0
    }, {
        title: "Bánh xe lắp cho xe ô tô phải đảm bảo an toàn kỹ thuật như thế nào dưới đây?",
        explanation: "",
        answers: [
            "Đủ số lượng, đủ áp suất, đúng cỡ lốp của nhà sản xuất hoặc tài liệu kỹ thuật quy định; lốp bánh dẫn hướng hai bên cùng kiểu hoa lốp, chiều cao hoa lốp đồng đều; không sử dụng lốp đắp; lốp không mòn đến dấu chỉ báo độ mòn của nhà sản xuất, không nứt, vỡ, phồng rộp làm hở lớp sợi mành.",
            "Vành, đĩa vành đúng kiểu loại, không rạn, nứt, cong vênh; bánh xe quay trơn, không bị bó kẹt hoặc cọ sát vào phần khác; moay ơ không bị rơ; lắp đặt chắc chắn, đủ các chi tiết kẹp chặt và phòng lỏng.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Âm lượng của còi điện lắp trên ô tô (đo ở độ cao 1,2 mét với khoảng cách 2 mét tính từ đầu xe) là bao nhiêu?",
        explanation: "Âm lượng của còi là từ 90 dB đến 115 dB.",
        answers: [
            "Không nhỏ hơn 90 dB (A), không lớn hơn 115 dB (A).",
            "Không nhỏ hơn 80 dB (A), không lớn hơn 105 dB (A).",
            "Không nhỏ hơn 70 dB (A), không lớn hơn 90 dB (A)."
        ],
        correctIdx: 0
    }, {
        title: "Mục đích của bảo dưỡng thường xuyên đối với xe ô tô có tác dụng gì dưới đây?",
        explanation: "",
        answers: [
            "Bảo dưỡng ô tô thường xuyên làm cho ô tô luôn luôn có tính năng kỹ thuật tốt, giảm cường độ hao mòn của các chi tiết, kéo dài tuổi thọ của xe.",
            "Ngăn ngừa và phát hiện kịp thời các hư hỏng và sai lệch kỹ thuật để khắc phục, giữ gìn được hình thức bên ngoài.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Trong các nguyên nhân nêu dưới đây, nguyên nhân nào làm động cơ diesel không nổ?",
        explanation: "Động cơ diesel không nổ do nhiên liệu lẫn tạp chất.",
        answers: [
            "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.",
            "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, không có tia lửa điện.",
            "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí và nước, không có tia lửa điện."
        ],
        correctIdx: 0
    }, {
        title: "Gạt nước lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
        explanation: "",
        answers: [
            "Đầy đủ số lượng, lắp đặt chắc chắn, hoạt động bình thường.",
            "Lưỡi gạt không quá mòn, diện tích quét đảm bảo tầm nhìn của người lái.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        title: "Dây đai an toàn lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
        explanation: "Dây đai an toàn có cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
        answers: [
            "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
            "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm mở ra khi giật dây đột ngột.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Thế nào là động cơ 4 kỳ?",
        explanation: "Động cơ 4 kỳ thì pít tông thực hiện 4 hành trình.",
        answers: [
            "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 2 (hai) hành trình, trong đó có một lần sinh công.",
            "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 4 (bốn) hành trình, trong đó có một lần sinh công."
        ],
        correctIdx: 1
    }, {
        title: "Công dụng của hệ thống bôi trơn đối với động cơ ô tô?",
        explanation: "Hệ thống bôi trơn giảm ma sát.",
        answers: [
            "Cung cấp một lượng dầu bôi trơn đủ và sạch dưới áp suất nhất định đi bôi trơn cho các chi tiết của động cơ để giảm ma sát, giảm mài mòn, làm kín, làm sạch, làm mát và chống gỉ.",
            "Cung cấp một lượng nhiên liệu đầy đủ và sạch để cho động cơ ô tô hoạt động.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Niên hạn sử dụng của xe ô tô tải (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
        explanation: "Niên hạn ô tô tải là 25 năm.",
        answers: [
            "15 năm.",
            "20 năm.",
            "25 năm."
        ],
        correctIdx: 2
    }, {
        title: "Niên hạn sử dụng của xe ô tô chở người trên 9 chỗ ngồi (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
        explanation: "Niên hạn ô tô trên 9 chỗ ngồi là 20 năm.",
        answers: [
            "5 năm.",
            "20 năm.",
            "25 năm."
        ],
        correctIdx: 1
    }, {
        title: "Hãy nêu công dụng của động cơ xe ô tô?",
        explanation: "Động cơ ô tô biến nhiệt năng thành cơ năng.",
        answers: [
            "Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khủy động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
            "Khi làm việc, cơ năng được biến đổi thành nhiệt năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 0
    }, {
        title: "Hãy nêu công dụng hệ thống truyền lực của xe ô tô?",
        explanation: "Hệ thống truyền lực truyền mô men quay từ động cơ tới bánh xe.",
        answers: [
            "Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của xe ô tô.",
            "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
            "Dùng để làm giảm tốc độ, dừng chuyển động của xe ô tô."
        ],
        correctIdx: 0
    }, {
        title: "Hãy nêu công dụng ly hợp (côn) của xe ô tô?",
        explanation: "Ly hợp (côn) truyền hoặc ngắt truyền động từ động cơ đến hộp số.",
        answers: [
            "Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình xe ô tô chuyển động.",
            "Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.",
            "Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô."
        ],
        correctIdx: 1
    }, {
        title: "Hãy nêu công dụng hộp số của xe ô tô?",
        explanation: "Hộp số ô tô đảm bảo chuyển động lùi.",
        answers: [
            "Truyền và tăng mô men xoắn giữa các trục vuông góc nhau, đảm bảo cho các bánh xe chủ động quay với tốc độ khác nhau khi sức cản chuyển động ở bánh xe hai bên không bằng nhau.",
            "Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động, chuyển số êm dịu, dễ điều khiển.",
            "Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, đảm bảo cho xe ô tô chuyển động lùi."
        ],
        correctIdx: 2
    }, {
        title: "Hãy nêu công dụng hệ thống lái của xe ô tô?",
        explanation: "Hệ thống lái dùng để thay đổi hướng.",
        answers: [
            "Dùng để thay đổi mô men từ động cơ tới các bánh xe chủ động khi xe ô tô chuyển động theo hướng xác định.",
            "Dùng để thay đổi mô men giữa các trục vuông góc nhau khi xe ô tô chuyển động theo hướng xác định.",
            "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định."
        ],
        correctIdx: 2
    }, {
        title: "Hãy nêu công dụng hệ thống phanh của xe ô tô?",
        explanation: "Hệ thống phanh giúp giảm tốc độ.",
        answers: [
            "Dùng để giảm tốc độ, dừng chuyển động của xe ô tô và giữ cho xe ô tô đứng yên trên dốc.",
            "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
            "Dùng để truyền hoặc ngắt truyền động từ động cơ đến bánh xe chủ động của xe ô tô."
        ],
        correctIdx: 0
    }, {
        title: "Đèn phanh trên xe mô tô có tác dụng gì dưới đây?",
        explanation: "",
        answers: [
            "Có tác dụng cảnh báo cho các xe phía sau biết xe đang giảm tốc để chủ động tránh hoặc giảm tốc để tránh va chạm.",
            "Có tác dụng định vị vào ban đêm với các xe từ phía sau tới để tránh va chạm.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/292.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "",
        answers: [
            "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Cần kiểm tra động cơ."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/293.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "",
        answers: [
            "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Cần kiểm tra động cơ."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/294.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "",
        answers: [
            "Báo hiệu thiếu dầu phanh.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Sắp hết nhiên liệu."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/295.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "",
        answers: [
            "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Sắp hết nhiên liệu."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/296.webp"),
        title: "Khi khởi động xe ô tô số tự động có trang bị chìa khóa thông minh có cần đạp hết hành trình bàn đạp chân phanh hay không?",
        explanation: "Khởi động xe tự động phải đạp phanh.",
        answers: [
            "Phải đạp hết hành trình bàn đạp chân phanh.",
            "Không cần đạp phanh.",
            "Tùy từng trường hợp."
        ],
        correctIdx: 0
    }, {
        title: "Ắc quy được trang bị trên xe ô tô có tác dụng gì dưới đây?",
        explanation: "Ắc quy để tích trữ điện năng.",
        answers: [
            "Giúp người lái xe kịp thời tạo xung lực tối đa lên hệ thống phanh trong khoảnh khắc đầu tiên của tình huống khẩn cấp.",
            "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
            "Hỗ trợ người lái xe khởi hành ngang dốc.",
            "Để tích trữ điện năng, cung cấp cho các phụ tải khi máy phát chưa làm việc."
        ],
        correctIdx: 3
    }, {
        title: "Máy phát điện được trang bị trên xe ô tô có tác dụng gì dưới đây?",
        explanation: "Máy phát điện để phát điện năng.",
        answers: [
            "Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
            "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
            "Hỗ trợ người lái xe khởi hành ngang dốc.",
            "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc."
        ],
        correctIdx: 0
    }, {
        title: "Dây đai an toàn được trang bị trên xe ô tô có tác dụng gì dưới đây?",
        explanation: "Dây đai giữ chặt người lái và hành khách trên ghế ngồi.",
        answers: [
            "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
            "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
            "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc."
        ],
        correctIdx: 1
    }, {
        title: "Túi khí được trang bị trên xe ô tô có tác dụng gì dưới đây?",
        explanation: "Túi khí giúp giảm khả năng va đập và hấp thụ một phần lực va đập.",
        answers: [
            "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
            "Giảm khả năng va đập của một số bộ phận cơ thể quan trọng với các vật thể trong xe.",
            "Hấp thụ một phần lực va đập lên người lái và hành khách.",
            "Cả ý 2 và ý 3."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/301.webp"),
        title: "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây không tắt trong thời gian dài, báo hiệu tình trạng như thế nào của xe ô tô?",
        explanation: "",
        answers: [
            "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Hệ thống lái gặp trục trặc."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/302.webp"),
        title: "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây có tác dụng gì?",
        explanation: "",
        answers: [
            "Dùng để kích (hay nâng) xe ô tô.",
            "Vặn ốc lắp bánh xe.",
            "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
            "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/303.webp"),
        title: "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
        explanation: "",
        answers: [
            "Thay lốp xe.",
            "Chữa cháy.",
            "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
            "Vặn ốc để tháo lắp bánh xe."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/304.webp"),
        title: "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
        explanation: "",
        answers: [
            "Thay lốp xe.",
            "Chữa cháy trong các trường hợp hỏa hoạn.",
            "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
            "Cầm máu cho người bị nạn."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/305.webp"),
        title: "Biển nào cấm các loại xe cơ giới đi vào, trừ xe gắn máy, mô tô hai bánh và các loại xe ưu tiên theo luật định?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 1 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/306.webp"),
        title: "Biển nào cấm ô tô tải?",
        explanation: "",
        answers: [
            "Cả ba biển.",
            "Biển 2 và 3.",
            "Biển 1 và 3.",
            "Biển 1 và 2."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/307.webp"),
        title: "Biển nào cấm máy kéo?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2 và 3.",
            "Biển 1 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/308.webp"),
        title: "Biển nào báo hiệu cấm xe mô tô ba bánh đi vào?",
        explanation: "Biển 1: P.104 “Cấm mô tô” thì cấm cả mô tô 3 bánh.Biển 2: P.103a “Cấm ô tô” cấm ô tô và và cả phương tiện 3 bánh đi vào.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/309.webp"),
        title: "Biển nào dưới đây xe gắn máy được phép đi vào?",
        explanation: "Biển 104 “Cấm mô tô” và biển 103a “Cấm ô tô” không cấm xe gắn máy (không phải mô tô). Nên cả 2 biển đều cho phép xe gắn máy đi vào.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/310.webp"),
        title: "Biển nào báo hiệu cấm xe mô tô hai bánh đi vào?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/311.webp"),
        title: "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
        explanation: "",
        answers: [
            "Không biển nào.",
            "Biển 1 và 2.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/312.webp"),
        title: "Biển nào cho phép ô tô con được vượt?",
        explanation: "Biển 1: DP.133 “Hết cấm vượt”; Biển 2: P.125 “Cấm vượt”; Biển 3: P.126 “Cấm ô tô tải vượt”. Chỉ có biển 2 cấm ô tô con vượt nên là đáp án đúng Biển 1 và biển 3.",
        answers: [
            "Biển 1 và 2.",
            "Biển 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/313.webp"),
        title: "Biển nào không cho phép ô tô con vượt?",
        explanation: "Biển 1: DP.133 “Hết cấm vượt”; Biển 2: P.125 “Cấm vượt”; Biển 3: P.126 “Cấm ô tô tải vượt”. Biển 2 cấm ô tô con vượt nên là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/314.webp"),
        title: "Biển nào cấm ô tô tải vượt?",
        explanation: "Biển 1: DP.133 “Hết cấm vượt”; Biển 2: P.125 “Cấm vượt”; Biển 3: P.126 “Cấm ô tô tải vượt”.",
        answers: [
            "Biển 1.",
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/315.webp"),
        title: "Biển nào cấm xe tải vượt?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/316.webp"),
        title: "Biển nào xe ô tô con được phép vượt?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/317.webp"),
        title: "Biển nào cấm quay đầu xe?",
        explanation: "Biển 1: P.123a “Cấm rẽ trái” không cấm quay đầu xe; Biển 2: P.124a “Cấm quay xe” không cấm rẽ trái.Nên Biển 2 là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào.",
            "Cả hai biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/318.webp"),
        title: "Biển nào cấm xe rẽ trái?",
        explanation: "Biển 1: P.123a “Cấm rẽ trái” không cấm quay đầu xe; Biển 2: P.124a “Cấm quay xe” không cấm rẽ trái.Nên Biển 1 là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/319.webp"),
        title: "Khi gặp biển nào xe được rẽ trái?",
        explanation: "Biển 1: P.123a “Cấm rẽ trái” không cấm quay đầu xe; Biển 2: P.124a “Cấm quay xe” không cấm rẽ trái.Nên Biển 2 là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/320.webp"),
        title: "Biển nào cấm ô tô rẽ trái?",
        explanation: "Biển 1: 123a “Cấm rẽ trái”; Biển 2: 124e “Cấm ô tô rẽ trái và quay xe” nên cả 2 biển đều cấm rẽ trái.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/321.webp"),
        title: "Biển nào cấm các phương tiện giao thông đường bộ rẽ phải?",
        explanation: "Biển 1: 123b “Cấm rẽ phải”; Biển 2: 124d “Cấm rẽ phải và quay xe”; Biển 3: 124f “Cấm ô tô rẽ phải và quay xe”.Nên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ phải.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/322.webp"),
        title: "Biển nào cấm các phương tiện giao thông đường bộ rẽ trái?",
        explanation: "Biển 1: 123a “Cấm rẽ trái”; Biển 2: 124c “Cấm rẽ trái và quay xe”; Biển 3: 124e “Cấm ô tô rẽ trái và quay xe”.Nên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ trái.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/323.webp"),
        title: "Biển nào dưới đây cấm ô tô quay đầu?",
        explanation: "Biển 1: P.124b “Cấm ô tô quay đầu xe”; Biển 2: P.124e “Cấm ôtô rẽ trái và quay xe”; Biển 3: P.103b “Cấm ô tô rẽ phải” - Biển này không cấm quay đầu.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Không biển nào."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/324.webp"),
        title: "Biển nào dưới đây cấm ô tô quay đầu và rẽ phải?",
        explanation: "Biển 1: P.124b “Cấm ô tô quay đầu xe”; Biển 2: P.124e “Cấm ôtô rẽ trái và quay xe”; Biển 3: P.124f “Cấm ôtô rẽ phải và quay xe”",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/325.webp"),
        title: "Biển nào cấm xe taxi mà không cấm các phương tiện khác?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/326.webp"),
        title: "Biển nào cho phép xe rẽ trái?",
        explanation: "Biển 1: P.123a “Cấm rẽ trái”; Biển 2: I.410 “Khu vực quay xe”. Nên Biển 2 cho phép rẽ trái là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/327.webp"),
        title: "Biển nào xe quay đầu không bị cấm?",
        explanation: "Biển 1: P.123a “Cấm rẽ trái” không cấm quay đầu xe; Biển 2: I.410 “Khu vực quay xe”. Nên cả 2 biển cho phép quay đầu xe là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/328.webp"),
        title: "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
        explanation: "Biển 1: 123a “Cấm rẽ trái” nhưng không cấm quay đầu xe.Biển 2: R.301e đặt trước ngã ba ngã tư chỉ được rẽ trái ở phạm vi ngã ba, ngã tư phía sau mặt biển nên không thể quay đầu xe.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/329.webp"),
        title: "Biển nào là biển \"Cấm đi ngược chiều\"?",
        explanation: "Biển 1: P.101 “Đường cấm”; Biển 2: P.102 “Cấm đi ngược chiều”; Biển 3: P.301a “Cấm đỗ xe”. Nên biển 2 là cấm đi ngược chiều.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả ba biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/330.webp"),
        title: "Biển nào dưới đây các phương tiện không được phép đi vào?",
        explanation: "Biển 1: P.101 “Đường cấm”;Biển 2: P.102 “Cấm đi ngược chiều” cấm đi vào theo chiều đặt biển;Biển 3: P.301a “Cấm đỗ xe”.Nên biển 1 và biển 2 là cấm các phương tiện không được phép đi vào.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 1 và 2."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/331.webp"),
        title: "Gặp biển nào người lái xe không được đỗ xe vào ngày chẵn?",
        explanation: "Biển 1: P.301a “Cấm đỗ xe” bất kỳ ngày nào; Biển 2: P301b “Cấm đỗ xe” vào ngày lẻ; Biển 3: P301c “Cấm đỗ xe” vào ngày chẵn. Nên biển 1 và biển 3 là cấm đỗ xe ngày chẵn.",
        answers: [
            "Biển 1.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/332.webp"),
        title: "Gặp biển nào người lái xe không được đỗ xe vào ngày lẻ?",
        explanation: "Biển 1: P.301a “Cấm đỗ xe” bất kỳ ngày nào; Biển 2: P301b “Cấm đỗ xe” vào ngày lẻ; Biển 3: P301c “Cấm đỗ xe” vào ngày chẵn. Nên biển 1 và biển 2 là cấm đỗ xe ngày lẻ.",
        answers: [
            "Biển 1 và 2.",
            "Biển 2.",
            "Biển 2 và 3.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/333.webp"),
        title: "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
        explanation: "Biển 1: P.101 “Đường cấm” không cấm xe ưu tiên;Biển 2: R.122 “Dừng lại” áp dụng với cả xe ưu tiên;Biển 3: P.102 “Cấm đi ngược chiều” không áp dụng với xe ưu tiên;Nên Biển 2 là đáp án đúng, áp dụng với cả xe ưu tiên.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả ba biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/334.webp"),
        title: "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
        explanation: "Biển 1: P.101 “Đường cấm” không cấm xe ưu tiên;Biển 2: R.122 “Dừng lại” áp dụng với cả xe ưu tiên;Nên Biển 1 là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/335.webp"),
        title: "Biển nào là biển \"Cấm xe chở hàng nguy hiểm\"?",
        explanation: "Biển 1: P.106a “Cấm xe tải”; Biển 2: P.106b “Cấm xe tải có khối lượng chuyên chở lớn hơn 2.5 tấn”; P.106c: “Cấm xe chở hàng nguy hiểm”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/336.webp"),
        title: "Gặp biển nào xe xích lô được phép đi vào?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và biển 2."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/337.webp"),
        title: "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/338.webp"),
        title: "Biển báo này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Đường cấm súc vật vận tải hàng hóa.",
            "Đường cấm súc vật vận tải hành khách.",
            "Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/339.webp"),
        title: "Biển báo này có ý nghĩa như thế nào?",
        explanation: "",
        answers: [
            "Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.",
            "Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/340.webp"),
        title: "Khi gặp các biển này xe ưu tiên theo luật định (có tải trọng hay chiều cao toàn bộ vượt quá chỉ số ghi trên biển) có được phép đi qua hay không?",
        explanation: "",
        answers: [
            "Được phép.",
            "Không được phép."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/341.webp"),
        title: "Biển nào hạn chế chiều cao của xe và hàng?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/342.webp"),
        title: "Biển số 2 có ý nghĩa như thế nào?",
        explanation: "",
        answers: [
            "Cho phép ô tô có tải trọng trục lớn hơn 7 tấn đi qua.",
            "Cho phép ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/343.webp"),
        title: "Biển số 3 có ý nghĩa như thế nào?",
        explanation: "",
        answers: [
            "Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.",
            "Hạn chế khối lượng hàng hóa chở trên xe.",
            "Hạn chế tải trọng trên trục xe."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/344.webp"),
        title: "Biển nào cấm máy kéo kéo theo rơ moóc?",
        explanation: "Biển 1: P.108 “Cấm ô tô kéo moóc”; Biển 2: P.109 “Cấm máy kéo”. Đáp án đúng là cả 2 biển.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/345.webp"),
        title: "Khi gặp biển số 1, xe ô tô tải có được đi vào không?",
        explanation: "Biển 1: P.108 “Cấm ô tô kéo moóc” không áp dụng với xe ô tô tải (không kéo rơ moóc).",
        answers: [
            "Được đi vào.",
            "Không được đi vào."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/346.webp"),
        title: "Biển nào không có hiệu lực đối với ô tô tải không kéo moóc?",
        explanation: "",
        answers: [
            "Biển 1 và 2.",
            "Biển 2 và 3.",
            "Biển 1 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/347.webp"),
        title: "Biển nào cấm máy kéo?",
        explanation: "Biển 1: P.108 “Cấm ô tô kéo moóc”; Biển 2: P.109 “Cấm máy kéo”; Biển 3: P.106a “Cấm ô tô tải” thì cấm máy kéo. Nên đáp án đúng là Biển 2 và Biển 3.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/348.webp"),
        title: "Khi gặp biển này, xe mô tô ba bánh có được phép rẽ trái hoặc rẽ phải hay không?",
        explanation: "",
        answers: [
            "Được phép.",
            "Không được phép."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/349.webp"),
        title: "Biển này có hiệu lực đối với xe mô tô hai, ba bánh không?",
        explanation: "",
        answers: [
            "Có.",
            "Không."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/350.webp"),
        title: "Biển này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Cấm xe cơ giới (trừ xe ưu tiên theo luật định) đi thẳng.",
            "Cấm xe ô tô và mô tô (trừ xe ưu tiên theo luật định) đi về bên trái và bên phải.",
            "Hướng trái và phải không cấm xe cơ giới."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/351.webp"),
        title: "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa gì?",
        explanation: "Biển phụ là biển S.501 “Phạm vi tác dụng của biển” xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
        answers: [
            "Báo khoảng cách đến nơi cấm bóp còi.",
            "Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
            "Báo cấm dùng còi có độ vang xa 500m."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/352.webp"),
        title: "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?",
        explanation: "Biển phụ là biển S.501 “Phạm vi tác dụng của biển” xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
        answers: [
            "Được phép.",
            "Không được phép."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/353.webp"),
        title: "Biển nào xe mô tô hai bánh được đi vào?",
        explanation: "Biển chính là P.101 “Đường cấm”, có biển phụ thì áp dụng cấm theo biển phụ. Nên Biển 1 và Biển 3 không áp dụng với xe mô tô là câu trả lời đúng.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/354.webp"),
        title: "Biển nào xe mô tô hai bánh không được đi vào?",
        explanation: "Biển chính là P.101 “Đường cấm”, có biển phụ thì áp dụng kèm theo biển phụ. Nên Biển 2 áp dụng với xe mô tô là câu trả lời đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/355.webp"),
        title: "Ba biển này có hiệu lực như thế nào?",
        explanation: "Biển chính là P.101 “Đường cấm”, có biển phụ thì áp dụng cấm theo biển phụ.",
        answers: [
            "Cấm các loại xe ở biển phụ đi vào.",
            "Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/356.webp"),
        title: "Biển nào báo hiệu chiều dài đoạn đường phải giữ cự ly tối thiểu giữa hai xe?",
        explanation: "Biển phụ 1: S.501 “Phạm vi tác dụng của biển”;Biển phụ 2: S.502 “Khoảng cách đến đối tượng báo hiệu”.Nên Biển phụ 1 là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/357.webp"),
        title: "Biển nào báo hiệu khoảng cách thực tế từ nơi đặt biển đến nơi cần cự ly tối thiểu giữa hai xe?",
        explanation: "Biển phụ 1: S.501 “Phạm vi tác dụng của biển”;Biển phụ 2: S.502 “Khoảng cách đến đối tượng báo hiệu”.Nên Biển phụ 2 là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/358.webp"),
        title: "Biển này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Cấm dừng xe về hướng bên trái.",
            "Cấm đỗ xe và cấm dừng xe theo hướng bên phải.",
            "Được phép đỗ xe và dừng xe theo hướng bên phải."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/359.webp"),
        title: "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
        explanation: "",
        answers: [
            "Không được phép.",
            "Được phép."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/360.webp"),
        title: "Gặp biển này, xe ô tô sơ mi rơ moóc có chiều dài toàn bộ kể cả xe, moóc và hàng lớn hơn trị số ghi trên biển có được phép đi vào hay không?",
        explanation: "",
        answers: [
            "Không được phép.",
            "Được phép."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/361.webp"),
        title: "Xe ô tô chở hàng vượt quá phía trước và sau thùng xe, mỗi phía quá 10% chiều dài toàn bộ thân xe, tổng chiều dài xe (cả hàng) từ trước đến sau nhỏ hơn trị số ghi trên biển thì có được phép đi vào không?",
        explanation: "",
        answers: [
            "Không được phép.",
            "Được phép."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/362.webp"),
        title: "Biển này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Cấm ô tô buýt.",
            "Cấm ô tô chở khách.",
            "Cấm ô tô con."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/363.webp"),
        title: "Biển này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Hạn chế chiều cao của xe và hàng.",
            "Hạn chế chiều ngang của xe và hàng.",
            "Hạn chế chiều dài của xe và hàng."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/364.webp"),
        title: "Biển nào là biển \"Tốc độ tối đa cho phép về ban đêm\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả 2 biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/365.webp"),
        title: "Biển báo nào báo hiệu bắt đầu đoạn đường vào phạm vi khu dân cư, các phương tiện tham gia giao thông phải tuân theo các quy định đi đường được áp dụng ở khu đông dân cư?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/366.webp"),
        title: "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/367.webp"),
        title: "Trong các biển báo dưới đây biển nào báo hiệu \"Hết đường cao tốc\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/368.webp"),
        title: "Số 50 ghi trên biển báo dưới đây có ý nghĩa gì?",
        explanation: "Biển số P.127 “Tốc độ tối đa cho phép”",
        answers: [
            "Tốc độ tối đa các xe cơ giới được phép chạy.",
            "Tốc độ tối thiểu các xe cơ giới được phép chạy."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/369.webp"),
        title: "Trong các biển dưới đây biển nào chỉ dẫn bắt đầu đường cao tốc?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả biển 1 và biển 2."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/370.webp"),
        title: "Biển báo dưới đây có ý nghĩa gì?",
        explanation: "Biển số R.306 “Tốc độ tối thiểu cho phép”",
        answers: [
            "Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
            "Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/371.webp"),
        title: "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
        explanation: "Biển 1: W.224 “Đường người đi bộ cắt ngang”; Biển 2: P.112 “Cấm người đi bộ”; Biển 3: R.305 “Đường dành cho người đi bộ”.Biển 1 báo ưu tiên cho người đi bộ nên phải nhường đường.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/372.webp"),
        title: "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
        explanation: "Biển 1: W.224 “Đường người đi bộ cắt ngang”; Biển 2: P.112 “Cấm người đi bộ”; Biển 3: R.305 “Đường dành cho người đi bộ”.Biển 3 báo đường dành cho người đi bộ nên phương tiện khác không được đi vào.",
        answers: [
            "Biển 1.",
            "Biển 1 và 3.",
            "Biển 3.",
            "Cả ba biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/373.webp"),
        title: "Biển nào báo hiệu \"Đường dành cho xe thô sơ\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/374.webp"),
        title: "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
        explanation: "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.208 “Giao nhau với đường ưu tiên”; Biển 3: W.209 “Giao nhau có tín hiệu đèn”.",
        answers: [
            "Biển 1.",
            "Biển 1 và 2.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/375.webp"),
        title: "Biển nào báo hiệu \"Giao nhau với đường sắt có rào chắn\"?",
        explanation: "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.208 “Giao nhau với đường ưu tiên”; Biển 3: W.209 “Giao nhau có tín hiệu đèn”.",
        answers: [
            "Biển 1.",
            "Biển 2 và 3.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/376.webp"),
        title: "Biển nào báo hiệu \"Giao nhau có tín hiệu đèn\"?",
        explanation: "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.208 “Giao nhau với đường ưu tiên”; Biển 3: W.209 “Giao nhau có tín hiệu đèn”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả ba biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/377.webp"),
        title: "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
        explanation: "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.234 “Giao nhau với đường hai chiều”; Biển 3: W.242a “Nơi đường sắt giao vuông góc với đường bộ”.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/378.webp"),
        title: "Biển nào báo hiệu đường sắt giao nhau với đường bộ không có rào chắn?",
        explanation: "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.211a “Giao nhau với đường sắt không có rào chắn”; Biển 3: W.242a “Nơi đường sắt giao vuông góc với đường bộ” bổ sung cho biển W.211a. Nên cả 2 biển 2 và 3 đều đúng.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/379.webp"),
        title: "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?",
        explanation: "Biển 1: Biển 211a Giao nhau với đường sắt không có rào chắn.Biển 2: Biển 208 Giao nhau với đường ưu tiên.Biển 3: Biển 211b Giao nhau với tàu điện.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/380.webp"),
        title: "Biển nào báo hiệu \"Cửa chui\"?",
        explanation: "Biển 1: W.237 “Cầu vòng”; Biển 2: W.218 “Cửa chui”; Biển 3: W.240 “Đường hầm”. Đáp án đúng là đáp án 2.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/381.webp"),
        title: "Hai biển này có ý nghĩa gì?",
        explanation: "Hai biển này là 242a và 242b “Nơi đường sắt giao nhau vuông góc với đường bộ” bổ sung cho biển 211 “Giao nhau với đường sắt không có rào chắn”. Do đó câu trả lời 1 đúng.",
        answers: [
            "Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.",
            "Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
            "Nơi đường sắt giao nhau với đường bộ."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/382.webp"),
        title: "Biển nào báo hiệu \"Nơi đường sắt giao vuông góc với đường bộ\"?",
        explanation: "Biển 1 và Biển 2 là 242a và 242b “Nơi đường sắt giao nhau vuông góc với đường bộ” bổ sung cho biển 211 “Giao nhau với đường sắt không có rào chắn”. Biển 3 là 243a “Nơi giao nhau không vuông góc với đường bộ”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 2."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/383.webp"),
        title: "Các biển này có ý nghĩa gì?",
        explanation: "Ba biển này là 243a, a43b và 243c Nơi giao nhau không vuông góc với đường sắt, không có người gác và không có rào chắn với đường sắt.",
        answers: [
            "Nơi đường sắt giao nhau với đường bộ.",
            "Nơi đường sắt giao vuông góc với đường bộ.",
            "Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/384.webp"),
        title: "Biển nào báo hiệu \"Hết đoạn đường ưu tiên\"?",
        explanation: "Biển 1: W.207a “Giao nhau với đường không ưu tiên”;Biển 2: W.208 “Giao nhau với đường ưu tiên”;Biển 3: I.402 “Hết đường ưu tiên”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/385.webp"),
        title: "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
        explanation: "Biển 1: W.207a “Giao nhau với đường không ưu tiên”;Biển 2: W.208 “Giao nhau với đường ưu tiên”;Biển 3: I.401 “Bắt đầu đường ưu tiên”. Nên Biển 1 và Biển 3 là đáp án đúng.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/386.webp"),
        title: "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?",
        explanation: "Biển 1: W.207a “Giao nhau với đường không ưu tiên”;Biển 2: W.208 “Giao nhau với đường ưu tiên”;Biển 3: I.401 “Bắt đầu đường ưu tiên”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 2 và 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/387.webp"),
        title: "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
        explanation: "Biển 1: W.207a “Giao nhau với đường không ưu tiên”;Biển 2: W.208 “Giao nhau với đường ưu tiên”;Biển 3: I.401 “Bắt đầu đường ưu tiên”.",
        answers: [
            "Biển 1 và 3.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/388.webp"),
        title: "Biển nào báo hiệu \"Đường bị thu hẹp\"?",
        explanation: "Biển 1: W.203a “Đường bị hẹp cả hai bên”; Biển 2: W203b “Đường bị hẹp về phía trái”; Biển 3: W.201b “Chỗ ngoặt nguy hiểm vòng bên phải”. Nên đáp án đúng là Biển 1 và Biển 2.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/389.webp"),
        title: "Khi gặp biển nào, người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi ở phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
        explanation: "Biển 1: W.236 “Hết đường đôi”; Biển 2: Biển 2: W203b “Đường bị hẹp về phía trái”; Biển 3:  Biển 3: W203c “Đường bị hẹp về phía phải”.Câu này hỏi về việc đường bị thu hẹp nên câu trả lời đúng là Biển 2 và Biển 3.",
        answers: [
            "Biển 1.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/390.webp"),
        title: "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
        explanation: "Biển 1: W.205a “Đường giao nhau” cùng cấp; Biển 2: W.207a “Giao nhau với đường không ưu tiên”; Biển 3: W.208 “Giao nhau với đường ưu tiên”;",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả ba biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/391.webp"),
        title: "Biển nào báo hiệu \"Đường giao nhau\" của các tuyến đường cùng cấp?",
        explanation: "Biển 1: W.205a “Đường giao nhau” cùng cấp; Biển 2: W.207a “Giao nhau với đường không ưu tiên”; Biển 3: W.208 “Giao nhau với đường ưu tiên”;",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/392.webp"),
        title: "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?",
        explanation: "Biển 1: W.205a “Đường giao nhau” cùng cấp; Biển 2: W.207a “Giao nhau với đường không ưu tiên”; Biển 3: W.208 “Giao nhau với đường ưu tiên”;",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/393.webp"),
        title: "Biển nào báo hiệu \"Đường hai chiều\"?",
        explanation: "Biển 1: W.204 “Đường hai chiều”;Biển 2: P.132 “Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp”;Biển 3: I.406 “Được ưu tiên qua đường hẹp”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/394.webp"),
        title: "Biển nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?",
        explanation: "Biển 1: W.204 “Đường hai chiều”;Biển 2: P.132 “Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp”;Biển 3: I.406 “Được ưu tiên qua đường hẹp”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/395.webp"),
        title: "Biển nào chỉ dẫn \"Được ưu tiên qua đường hẹp\"?",
        explanation: "Biển 1: W.204 “Đường hai chiều”;Biển 2: P.132 “Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp”;Biển 3: I.406 “Được ưu tiên qua đường hẹp”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 2 và 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/396.webp"),
        title: "Biển nào báo hiệu \"Đường đôi\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/397.webp"),
        title: "Biển nào báo hiệu \"Đường đôi\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/398.webp"),
        title: "Biển nào báo hiệu \"Kết thúc đường đôi\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/399.webp"),
        title: "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/400.webp"),
        title: "Biển nào báo hiệu \"Đường hai chiều\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/401.webp"),
        title: "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/402.webp"),
        title: "Biển nào báo hiệu \"Chú ý chướng ngại vật\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/403.webp"),
        title: "Biển nào chỉ dẫn cho người tham gia giao thông biết vị trí và khoảng cách có làn đường cứu nạn hay làn thoát xe khẩn cấp?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/404.webp"),
        title: "Biển nào báo hiệu \"Đường hầm\"?",
        explanation: "",
        answers: [
            "Cả ba biển.",
            "Biển 2.",
            "Biển 2 và 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/405.webp"),
        title: "Biển nào dưới đây là biển \"Cầu hẹp\"?",
        explanation: "Biển 1: W.213 “Cầu tạm”; Biển 2: W.212 “Cầu hẹp”; Biển 3: W.214 “Cầu xoay - cầu cất”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/406.webp"),
        title: "Biển nào dưới đây là biển \"Cầu quay - cầu cất\"?",
        explanation: "Biển 1: W.213 “Cầu tạm”; Biển 2: W.212 “Cầu hẹp”; Biển 3: W.214 “Cầu xoay - cầu cất”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/407.webp"),
        title: "Biển nào dưới đây là biển \"Kè, vực sâu phía trước\"?",
        explanation: "Biển 1: W.215a “Kè, vực sâu phía trước”;Biển 2: W.215b “Kè, vực sâu bên đường phía bên phải”;Biển 3: W.215c “Kè, vực sâu bên đường phía bên trái”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/408.webp"),
        title: "Biển nào sau đây là biển \"Kè, vực sâu bên đường phía bên trái\"?",
        explanation: "Biển 1: W.215a “Kè, vực sâu phía trước”;Biển 2: W.215b “Kè, vực sâu bên đường phía bên phải”;Biển 3: W.215c “Kè, vực sâu bên đường phía bên trái”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và biển 2."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/409.webp"),
        title: "Biển nào sau đây là biển \"Kè, vực sâu bên đường phía bên phải\"?",
        explanation: "Biển 1: W.215a “Kè, vực sâu phía trước”;Biển 2: W.215b “Kè, vực sâu bên đường phía bên phải”;Biển 3: W.215c “Kè, vực sâu bên đường phía bên trái”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/410.webp"),
        title: "Biển nào sau đây là biển \"Đường trơn\"?",
        explanation: "Biển 1: W201c “Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái”; Biển 2: W.222a “Đường trơn”; Biển 3: W217 “Bến phà”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/411.webp"),
        title: "Biển nào sau đây là biển \"Lề đường nguy hiểm\"?",
        explanation: "Biển 1: W.215b “Kè, vực sâu bên đường phía bên trái”; Biển 2: W.222b “Lề đường nguy hiểm”; Biển 3: W201c “”Chỗ ngoặt nguy hiểm có nguy cơ lật xe”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/412.webp"),
        title: "Biển nào sau đây báo trước gần tới đoạn đường đang tiến hành thi công?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Không biển nào."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/413.webp"),
        title: "Biển nào sau đây cảnh báo nguy hiểm đoạn đường thường xảy ra tai nạn?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/414.webp"),
        title: "Biển nào dưới đây báo hiệu đoạn đường hay xảy ra ùn tắc giao thông?",
        explanation: "Biển 1: W.240 “Đường hầm”; Biển 2: W.241 “Ùn tắc giao thông”; Biển 3: W.244 “Đoạn đường hay xảy ra tai nạn”",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả 3 biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/415.webp"),
        title: "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/416.webp"),
        title: "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
        explanation: "Biển 1: W.224 “Đường người đi bộ cắt ngang”; Biển 2: I.423c “Điểm bắt đầu đường đi bộ”; Biển 3: W.225 “Trẻ em”",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/417.webp"),
        title: "Biển nào dưới đây báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?",
        explanation: "Biển 1: W.224 “Đường người đi bộ cắt ngang”; Biển 2: W.225 “Trẻ em”; Biển 3: W.226 “Đường người đi xe đạp cắt ngang”",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả 3 biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/418.webp"),
        title: "Gặp biển nào dưới đây người tham gia giao thông cần phải điều chỉnh tốc độ xe chạy cho thích hợp, đề phòng gió ngang thổi mạnh gây lật xe?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/419.webp"),
        title: "Biển nào sau đây là biển \"Dốc xuống nguy hiểm\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/420.webp"),
        title: "Biển nào sau đây là biển \"Dốc lên nguy hiểm\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/421.webp"),
        title: "Biển báo này có ý nghĩa gì?",
        explanation: "Biển W201c “Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái”;",
        answers: [
            "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
            "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng sang phải."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/422.webp"),
        title: "Biển báo này có ý nghĩa gì?",
        explanation: "Biển W.217 “Bến phà”",
        answers: [
            "Báo trước đoạn đường có gió ngang.",
            "Báo trước đoạn đường trơn trượt.",
            "Báo trước sắp đến bến phà."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/423.webp"),
        title: "Biển báo này có ý nghĩa gì?",
        explanation: "Biển W.221a “Đường ổ gà, sống trâu”",
        answers: [
            "Báo hiệu đường có ổ gà , lồi lõm.",
            "Báo hiệu đường có gồ giảm tốc phía trước."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/424.webp"),
        title: "Biển báo này có ý nghĩa gì?",
        explanation: "Biển W221b “Đường có sóng mấp mô nhân tạo”",
        answers: [
            "Báo hiệu đường có ổ gà, lồi lõm.",
            "Báo hiệu đường có gồ giảm tốc phía trước."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/425.webp"),
        title: "Biển báo dưới đây có ý nghĩa gì?",
        explanation: "Biển W.228d “Nền đường yếu”",
        answers: [
            "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
            "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
            "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/426.webp"),
        title: "Các biển báo này có ý nghĩa gì?",
        explanation: "Biển số W.228 (a, b) “Đá lở”",
        answers: [
            "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
            "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
            "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/427.webp"),
        title: "Biển báo này có ý nghĩa gì?",
        explanation: "Biển số W.228c “Sỏi đá bắn lên”",
        answers: [
            "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
            "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
            "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/428.webp"),
        title: "Gặp biển báo này người lái xe phải xử lý thế nào?",
        explanation: "",
        answers: [
            "Đi chậm, quan sát và dừng lại nếu gặp gia súc trên đường.",
            "Bấm còi to để gia súc tránh đường và nhanh chóng di chuyển qua đoạn đường có gia súc."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/429.webp"),
        title: "Biển báo này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Báo hiệu khu vực nguy hiểm thường xuyên có sét đánh.",
            "Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/430.webp"),
        title: "Biển nào báo hiệu các phương tiện phải đi đúng làn đường quy định và tuân thủ tốc độ tối đa cho phép?",
        explanation: "Biển 1 là 127b Tốc độ tối đa trên từng làn đường; Biển 2 là 127c tốc độ tối đa cho phép theo phương tiện trên từng làn đường. Nên biển 2 là đáp án đúng (quy định loại phương tiện và tốc độ của làn đường).",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/431.webp"),
        title: "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
        explanation: "Biển 1 là 127b Tốc độ tối đa trên từng làn đường; Biển 2 là 127c tốc độ tối đa cho phép theo phương tiện trên từng làn đường. Nên cả 2 biển đều là đáp án đúng (Quy định tốc độ phương tiện theo làn đường).",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/432.webp"),
        title: "Biển nào báo hiệu \"Đường dành cho xe ô tô\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/433.webp"),
        title: "Biển nào báo hiệu \"Hết đoạn đường dành cho xe ô tô\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/434.webp"),
        title: "Khi gặp biển nào thì các phương tiện không được đi vào, trừ ô tô và mô tô?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/435.webp"),
        title: "Biển này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Chỉ hướng đi phải theo.",
            "Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.",
            "Chỉ hướng đường phải theo."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/436.webp"),
        title: "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
        explanation: "Biển 1: R.301a “Hướng đi phải theo” chỉ được đi thẳng đặt trước ngã ba, ngã tư;Biển 2: R.301h “Hướng đi phải theo” chỉ được rẽ trái hoặc rẽ phải đặt sau ngã ba, ngã tư;Nên đáp án đúng là không có biển nào.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/437.webp"),
        title: "Biển nào báo hiệu \"Hướng đi thẳng phải theo\"?",
        explanation: "Biển 1: R.301a “Hướng đi phải theo” chỉ được đi thẳng đặt trước ngã ba, ngã tư;Biển 2: I.407a “Đường một chiều” không liên quan hướng đi phải theo.Nên Biển 1 là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/438.webp"),
        title: "Biển nào báo hiệu \"Đường một chiều\"?",
        explanation: "Biển 1: R.301a “Hướng đi phải theo” chỉ được đi thẳng đặt trước ngã ba, ngã tư;Biển 2: I.407a “Đường một chiều”;Nên Biển 2 là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/439.webp"),
        title: "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối đa cho phép\"?",
        explanation: "Biển 1: DP134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP135 “Hết mọi lệnh cấm”; Biển 3: R307 “Hết hạn chế tốc độ tối thiểu”. Nên Biển 1 là biển “Hết hạn chế tốc độ tối đa”.Chú ý câu này hỏi ý nghĩa của biển.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả ba biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/440.webp"),
        title: "Hiệu lực của biển \"Tốc độ tối đa cho phép\" hết tác dụng khi gặp biển nào dưới đây?",
        explanation: "Biển 1: DP134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP135 “Hết mọi lệnh cấm”; Biển 3: R307 “Hết hạn chế tốc độ tối thiểu”. Nên Biển 1 và Biển 2 là đều hết hạn chế tốc độ tối đa.Chú ý câu hỏi các biển hết hạn chế, không phải ý nghĩa của biển.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 2."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/441.webp"),
        title: "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối thiểu\"?",
        explanation: "Biển 1: DP134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP135 “Hết mọi lệnh cấm”; Biển 3: R307 “Hết hạn chế tốc độ tối thiểu”. Nên Biển 3 là biển “Hết hạn chế tốc độ tối thiểu”.Chú ý câu này hỏi ý nghĩa của biển.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả ba biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/442.webp"),
        title: "Biển nào dưới đây báo hiệu hết cấm vượt?",
        explanation: "Biển 1: DP.134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP.135 “Hết tất cả các lệnh cấm”; Biển 3: DP.133 “Hết cấm vượt”;Nên đáp án đúng phải là Biển 2 và Biển 3.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 2 và 3."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/443.webp"),
        title: "Trong các biển dưới đây biển nào là biển \"Hết mọi lệnh cấm\"?",
        explanation: "Biển 1: DP.134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP.135 “Hết tất cả các lệnh cấm”; Biển 3: R.307 “Hết hạn chế tốc độ tối thiểu”.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả ba biển."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/444.webp"),
        title: "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
        explanation: "R.301 (a, b, c,d, e, f,g, h ) “Hướng đi phải theo”;Biển 1: R.301e đặt trước ngã ba, ngã tư, chỉ được rẽ trái ở phạm vi ngã ba, ngã tư đằng sau mặt biển.Biển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.Biển 3: R.301g đặt trước ngã ba, ngã tư, chỉ được phép đi thẳng hay rẽ trái ở khu vực sau mặt biển và được phép quay đầu xe để đi theo hướng ngược lại.Biển 3 là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Không biển nào."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/445.webp"),
        title: "Biển nào không cho phép rẽ phải?",
        explanation: "R.301 (a, b, c,d, e, f,g, h ) “Hướng đi phải theo”;Biển 1: R.301e đặt trước ngã ba, ngã tư, chỉ được rẽ trái ở phạm vi ngã ba, ngã tư đằng sau mặt biển.Biển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.Biển 3: R.301g đặt trước ngã ba, ngã tư, chỉ được phép đi thẳng hay rẽ trái ở khu vực sau mặt biển và được phép quay đầu xe để đi theo hướng ngược lại.Biển 1 không cho phép rẽ phải là đáp án đúng.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/446.webp"),
        title: "Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?",
        explanation: "R.301 (a, b, c,d, e, f,g, h ) “Hướng đi phải theo”;Biển 1: R.301e đặt trước ngã ba, ngã tư, chỉ được rẽ trái ở phạm vi ngã ba, ngã tư đằng sau mặt biển.Biển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.Biển 3: R.301g đặt trước ngã ba, ngã tư, chỉ được phép đi thẳng hay rẽ trái ở khu vực sau mặt biển và được phép quay đầu xe để đi theo hướng ngược lại.Biển 1 và Biển 2 là đáp án đúng.",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/447.webp"),
        title: "Biển nào cho phép quay đầu xe?",
        explanation: "Biển 1: I.409 “Chỗ quay xe” và Biển 2: I.410 “Khu vực quay xe” nên cả 2 biển đều cho phép quay đầu xe.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/448.webp"),
        title: "Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 2."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/449.webp"),
        title: "Biển số 1 có ý nghĩa gì?",
        explanation: "Biển 1: R.E,10b “Hết cấm đỗ xe theo giờ trong khu vực” ; Biển 2: R.E,10a “Hết cấm đỗ xe trong khu vực”; Biển 3: R.E,10c: “Hết khu vực đỗ xe”.",
        answers: [
            "Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.",
            "Biển chỉ dẫn hết hiệu lực khu vực đỗ xe trên các tuyến đường đối ngoại.",
            "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/450.webp"),
        title: "Biển số 3 có ý nghĩa gì?",
        explanation: "Biển 1: R.E,9a “Cấm đỗ xe trong khu vực”; Biển 2: Biển R.E,10c “Hết khu vực đỗ xe”; Biển 3: Biển R.E,9d “Hạn chế tốc độ tối đa trong khu vực”.",
        answers: [
            "Biển chỉ dẫn khu vực cấm đỗ xe trên các tuyến đường đối ngoại.",
            "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại.",
            "Biển hạn chế tốc độ tối đa trong khu vực.",
            "Biển chỉ dẫn hết hiệu lực khu vực cấm đỗ xe theo giờ trên các tuyến đường đối ngoại."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/451.webp"),
        title: "Biển nào báo hiệu \"Đường phía trước có làn đường dành cho ô tô khách\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/452.webp"),
        title: "Biển nào báo hiệu \"Rẽ ra đường có làn đường dành cho ô tô khách\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/453.webp"),
        title: "Biển nào đặt trên đường chính trước khi đến nơi đường giao nhau để rẽ vào đường cụt?",
        explanation: "",
        answers: [
            "Biển 1 và 2.",
            "Cả ba biển.",
            "Không biển nào."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/454.webp"),
        title: "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
        explanation: "Biển 1: I424a “Cầu vượt qua đường cho người đi bộ”; Biển 2: I424c “Hầm chui qua đường cho người đi bộ” nên đáp án đúng là biển 1.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
            "Không biển nào."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/455.webp"),
        title: "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
        explanation: "Biển 1: I424b “Cầu vượt qua đường cho người đi bộ”; Biển 2: I424d “Hầm chui qua đường cho người đi bộ” nên đáp án đúng là biển 2.",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
            "Không biển nào."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/456.webp"),
        title: "Biển nào báo hiệu \"Nơi đỗ xe dành cho người khuyết tật\"?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/457.webp"),
        title: "Gặp biển báo này, người lái xe phải đỗ xe như thế nào?",
        explanation: "",
        answers: [
            "Đỗ xe hoàn toàn trên hè phố.",
            "Đỗ xe hoàn toàn dưới lòng đường.",
            "Đỗ từ 1/2 thân xe trở lên trên hè phố."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/458.webp"),
        title: "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
        explanation: "Biển I.436 “Trạm cảnh sát giao thông”. Các phương tiện phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.",
        answers: [
            "Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
            "Tiếp tục lưu thông với tốc độ bình thường.",
            "Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/459.webp"),
        title: "Gặp biển báo dưới đây, người lái xe có bắt buộc phải chạy vòng theo đảo an toàn theo hướng mũi tên khi muốn chuyển hướng hay không?",
        explanation: "",
        answers: [
            "Bắt buộc.",
            "Không bắt buộc."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/460.webp"),
        title: "Biển nào dưới đây chỉ dẫn địa giới hành chính giữa các thành phố, tỉnh, huyện?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/461.webp"),
        title: "Biển nào báo hiệu \"Cầu vượt liên thông\"?",
        explanation: "",
        answers: [
            "Biển 2 và 3.",
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Cả ba biển."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/462.webp"),
        title: "Biển số 1 có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Đi thẳng hoặc rẽ trái trên cầu vượt.",
            "Đi thẳng hoặc rẽ phải trên cầu vượt.",
            "Báo hiệu cầu vượt liên thông."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/463.webp"),
        title: "Biển nào báo hiệu \"Tuyến đường cầu vượt cắt qua\"?",
        explanation: "",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/464.webp"),
        title: "Biển báo dưới đây có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).",
            "Báo hiệu đường cụt phía trước.",
            "Báo hiệu nút giao gần nhất phía trước.",
            "Báo hiệu trạm dừng nghỉ phía trước."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/465.webp"),
        title: "Tại đoạn đường có biển \"Làn đường dành riêng cho từng loại xe\" dưới đây, các phương tiện có được phép chuyển sang làn khác để đi theo hành trình mong muốn khi đến gần nơi đường bộ giao nhau hay không??",
        explanation: "",
        answers: [
            "Được phép chuyển sang làn khác.",
            "Không được phép chuyển sang làn khác, chỉ được đi trong làn quy định theo biển."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/466.webp"),
        title: "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        explanation: "Biển số R.403a “Đường dành cho ôtô” nên xe tải và xe khách đi vào được.",
        answers: [
            "Có.",
            "Không."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/467.webp"),
        title: "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        explanation: "Biển số R.403d “Đường dành cho ôtô con” nên xe tải và xe khách KHÔNG được phép đi vào.",
        answers: [
            "Có.",
            "Không."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/468.webp"),
        title: "Biển nào báo hiệu kết thúc đường cao tốc?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/469.webp"),
        title: "Biển này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Chỉ dẫn sắp đến vị trí nhập làn xe.",
            "Chỉ dẫn vị trí nhập làn xe cách 250 m.",
            "Chỉ dẫn vị trí nhập làn cách trạm thu phí 250 m."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/470.webp"),
        title: "Biển này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Bắt đầu đường cao tốc.",
            "Chỉ dẫn địa giới đường cao tốc, chiều dài đường cao tốc.",
            "Tên và ký hiệu đường cao tốc, giá trị hạn chế tốc độ tối đa và tối thiểu.",
            "Cả ý 1 và ý 3."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/471.webp"),
        title: "Ý nghĩa các biểu tượng ghi trên biển chỉ dẫn là gì?",
        explanation: "",
        answers: [
            "Xăng dầu, ăn uống, thông tin, sửa chữa xe.",
            "Xăng dầu, ăn uống, nhà nghỉ, sửa chữa xe.",
            "Xăng dầu, ăn uống, cấp cứu, sửa chữa xe."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/472.webp"),
        title: "Biển này có ý nghĩa gì?",
        explanation: "",
        answers: [
            "Chỉ dẫn đến trạm kiểm tra tải trọng xe.",
            "Chỉ dẫn hướng rẽ vào nơi đặt trạm kiểm tra tải trọng xe.",
            "Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/473.webp"),
        title: "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên trái để tránh chướng ngại vật?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/474.webp"),
        title: "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên phải để tránh chướng ngại vật?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/475.webp"),
        title: "Trên đường cao tốc, gặp biển nào thì người lái xe đi được cả hai hướng (bên trái hoặc bên phải) để tránh chướng ngại vật?",
        explanation: "",
        answers: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/476.webp"),
        title: "Trên đường cao tốc, gặp biển nào người lái xe phải chú ý đổi hướng đi khi sắp vào đường cong nguy hiểm?",
        explanation: "",
        answers: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2.",
            "Biển 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/477.webp"),
        title: "Vạch mũi tên chỉ hướng trên mặt đường nào dưới đây cho phép xe chỉ được đi thẳng và rẽ phải?",
        explanation: "",
        answers: [
            "Vạch 1.",
            "Vạch 2 và 3.",
            "Vạch 3.",
            "Vạch 1 và 2."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/478.webp"),
        title: "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
        explanation: "",
        answers: [
            "Vạch 1.",
            "Vạch 2.",
            "Vạch 3.",
            "Vạch 1 và 2."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/479.webp"),
        title: "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường), xe không được lấn làn, không được đè lên vạch?",
        explanation: "",
        answers: [
            "Vạch 1.",
            "Vạch 2.",
            "Vạch 3.",
            "Cả 3 vạch."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/480.webp"),
        title: "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
        explanation: "",
        answers: [
            "Vạch 1.",
            "Vạch 2.",
            "Vạch 3.",
            "Vạch 1 và 3."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/481.webp"),
        title: "Các vạch dưới đây có tác dụng gì?",
        explanation: "",
        answers: [
            "Phân chia hai chiều xe chạy ngược chiều nhau.",
            "Phân chia các làn xe chạy cùng chiều nhau."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/482.webp"),
        title: "Các vạch dưới đây có tác dụng gì?",
        explanation: "",
        answers: [
            "Phân chia hai chiều xe chạy ngược chiều nhau.",
            "Phân chia các làn xe chạy cùng chiều nhau."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/483.webp"),
        title: "Khi gặp vạch kẻ đường nào các xe được phép đè vạch?",
        explanation: "",
        answers: [
            "Vạch 1.",
            "Vạch 2.",
            "Vạch 3.",
            "Vạch 1 và vạch 3."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/484.webp"),
        title: "Vạch dưới đây có tác dụng gì?",
        explanation: "Vạch 7.8: Vạch xác định khoảng cách xe trên đường.",
        answers: [
            "Để xác định làn đường.",
            "Báo hiệu người lái xe chỉ được phép đi thẳng.",
            "Dùng để xác định khoảng cách giữa các phương tiện trên đường."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/485.webp"),
        title: "Vạch dưới đây có ý nghĩa gì?",
        explanation: "Vạch 7.6: Vạch chỉ dẫn sắp đến chỗ có bố trí vạch đi bộ qua đường.",
        answers: [
            "Báo cho người điều khiển không được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
            "Báo hiệu sắp đến chỗ có bố trí vạch đi bộ qua đường.",
            "Dùng để xác định khoảng cách giữa các phương tiện trên đường."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/486.webp"),
        title: "Vạch dưới đây có ý nghĩa gì?",
        explanation: "Vạch 9.2: Vạch quy định vị trí dừng đỗ của phương tiện giao thông công cộng trên đường.",
        answers: [
            "Vị trí dừng xe của các phương tiện vận tải hành khách công cộng.",
            "Báo cho người điều khiển được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
            "Dùng để xác định vị trí giữa các phương tiện trên đường."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/487.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái. 1. Xe tải: đường ưu tiên và đi thẳng; 2. Mô tô: đường ưu tiên và rẽ trái; 3. Xe khách: đường không ưu tiên, đi thẳng. 4. Xe con: đường không ưu tiên, rẽ trái.",
        answers: [
            "Xe tải, xe khách, xe con, mô tô.",
            "Xe tải, mô tô, xe khách, xe con.",
            "Xe khách, xe tải, xe con, mô tô.",
            "Mô tô, xe khách, xe tải, xe con."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/488.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái. 1. Xe công an: Xe ưu tiên.2. Xe con: đường ưu tiên.3. Xe tải: đường không ưu tiên, đi thẳng. 4. Xe khách: đường không ưu tiên, rẽ trái.",
        answers: [
            "Xe công an, xe con, xe tải, xe khách.",
            "Xe công an, xe khách, xe con, xe tải.",
            "Xe công an, xe tải, xe khách, xe con.",
            "Xe con, xe công an, xe tải, xe khách."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/489.webp"),
        title: "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái. 1. Xe công an: Xe ưu tiên; 2. Xe tải: đường ưu tiên; 3. Xe khách: đường không ưu tiên, bên phải trống;4. Xe con: đường không ưu tiên, bên phải vướng xe khách nên phải nhường.",
        answers: [
            "Xe tải, xe công an, xe khách, xe con.",
            "Xe công an, xe khách, xe con, xe tải.",
            "Xe công an, xe con, xe tải, xe khách.",
            "Xe công an, xe tải, xe khách, xe con."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/490.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái. 1. Xe mô tô: Bên phải trống; 2. Xe con: đi thẳng; 3. Xe tải: Rẽ trái;",
        answers: [
            "Xe tải, xe con, mô tô.",
            "Xe con, xe tải, mô tô.",
            "Mô tô, xe con, xe tải.",
            "Xe con, mô tô, xe tải."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/491.webp"),
        title: "Xe nào phải nhường đường trong trường hợp này?",
        explanation: "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới. Xe con nhường vì thấy xe tải từ bên trái tới đã nằm trong vòng xuyến.",
        answers: [
            "Xe con.",
            "Xe tải."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/492.webp"),
        title: "Trường hợp này xe nào được quyền đi trước?",
        explanation: "Xe con được đi trước vì mô tô có biển STOP trước mặt.",
        answers: [
            "Mô tô.",
            "Xe con."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/493.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.. 1. Xe con (A): đã vào ngã tư trước; 2. Xe cứu thương: Xe ưu tiên; 3. Xe con (B);",
        answers: [
            "Xe con (A), xe cứu thương, xe con (B).",
            "Xe cứu thương, xe con (B), xe con (A).",
            "X con (B), xe con (A), xe cứu thương."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/494.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự xe ưu tiên: Xe cứu hoả (mức độ thương vong lớn hơn); Xe công an; Xe cứu thương.",
        answers: [
            "Xe cứu thương, xe cứu hỏa, xe con.",
            "Xe cứu hỏa, xe cứu thương, xe con.",
            "Xe cứu thương, xe con, xe cứu hỏa."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/495.webp"),
        title: "Xe nào được quyền đi trước trong trường hợp này?",
        explanation: "Xe ưu tiên đi trước.",
        answers: [
            "Mô tô.",
            "Xe cứu thương."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/496.webp"),
        title: "Xe nào phải nhường đường đi cuối cùng qua nơi giao nhau này?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái. 1. Xe con: đường ưu tiên; 2. Xe tải: đường không ưu tiên, rẽ phải; 3. Xe khách: đường không ưu tiên, rẽ trái (Đáp án đúng).",
        answers: [
            "Xe khách.",
            "Xe tải.",
            "Xe con."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/497.webp"),
        title: "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái. Xe tải bên phải trống nên đi trước;Đáp án đúng là Xe con phải nhường đường: Bên phải vướng xe tải.",
        answers: [
            "Xe con.",
            "Xe tải."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/498.webp"),
        title: "Xe nào được quyền đi trước trong trường hợp này?",
        explanation: "Xe ưu tiên theo mức độ thiệt hại: Xe chữa cháy ưu tiên hơn.",
        answers: [
            "Xe công an.",
            "Xe chữa cháy."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/499.webp"),
        title: "Theo tín hiệu đèn, xe nào được phép đi?",
        explanation: "Xe con và xe khách đang ở làn đường có tín hiệu đèn xanh nên được phép đi.",
        answers: [
            "Xe con và xe khách.",
            "Mô tô."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/500.webp"),
        title: "Theo tín hiệu đèn, xe nào được quyền đi là đúng quy tắc giao thông?",
        explanation: "Xe con và xe tải đang ở trên làn đường có tín hiệu đèn xanh nên được phép đi.",
        answers: [
            "Xe khách, mô tô.",
            "Xe con, xe tải.",
            "Xe tải, mô tô."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/501.webp"),
        title: "Trong trường hợp này xe nào được quyền đi trước?",
        explanation: "Xe ưu tiên cùng cấp nên áp dụng thứ tự đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. Xe quân sự được ưu tiên trước do bên phải trống.",
        answers: [
            "Xe công an.",
            "Xe quân sự."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/502.webp"),
        title: "Theo tín hiệu đèn, xe tải đi theo hướng nào là đúng quy tắc giao thông?",
        explanation: "Hướng 1 rẽ phải có tín hiệu đèn xanh nên được phép đi. Hướng đi thẳng đang có tín hiệu đèn đỏ do đó các hướng 2,3,4 không thể đi được. Câu trả lời đúng là chỉ có hướng 1.",
        answers: [
            "Hướng 2, 3, 4.",
            "Chỉ hướng 1.",
            "Hướng 1 và 2.",
            "Hướng 3 và 4."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/503.webp"),
        title: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        explanation: "Xe khách: Sai làn, Đi thẳng đèn đang đỏ; 2. Xe tải: Sai làn: đi trên làn đi thẳng trong khi thực hiện rẽ trái.3. Xe mô tô: Sai làn: đi trên làn rẽ trái trong khi thực hiện rẽ phải,Nên đáp án đúng là xe khách, xe tải và xe mô tô đều vi phạm quy tắc giao thông.",
        answers: [
            "Xe khách, xe tải, mô tô.",
            "Xe tải, xe con, mô tô.",
            "Xe khách, xe con, mô tô."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/504.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.Toàn bộ các xe chưa vào phòng xuyến nên ưu tiên xe bên phải.Thứ tự sẽ là Mô tô, xe tải, xe khách, xe con.",
        answers: [
            "Xe khách, xe tải, mô tô, xe con.",
            "Xe con, xe khách, xe tải, mô tô.",
            "Mô tô, xe tải, xe khách, xe con.",
            "Mô tô, xe tải, xe con, xe khách."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/505.webp"),
        title: "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
        explanation: "Biển cấm đỗ xe tải (ở biển phụ) nên chỉ có xe tải vi phạm.",
        answers: [
            "Xe tải.",
            "Xe con và mô tô.",
            "Cả ba xe.",
            "Xe con và xe tải."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/506.webp"),
        title: "Xe nào được quyền đi trước?",
        explanation: "Thứ tự ưu tiên không vòng xuyến: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.Đáp án đúng là Xe con (B): đường ưu tiên;",
        answers: [
            "Xe tải.",
            "Xe con (B).",
            "Xe con (A)."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/507.webp"),
        title: "Theo hướng mũi tên, những hướng nào xe gắn máy đi được?",
        explanation: "Bạn lưu ý câu hỏi này hỏi về hướng đi của xe GẮN MÁY. Hướng 1 và 3 chắc chắn là đi được rồi.Với hướng 2, biển báo cấm mô tô đi vào chỉ có tác dụng với xe MÔ TÔ nên xe gắn máy không có hiệu lực. Do đó vẫn đi vào bình thường.",
        answers: [
            "Cả ba hướng.",
            "Chỉ hướng 1 và 3.",
            "Chỉ hướng 1."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/508.webp"),
        title: "Xe nào đỗ vi phạm quy tắc giao thông?",
        explanation: "Biển cấm đỗ xe ở cả phía trước và phía sau biển (ở biển báo phụ) nên cả 2 xe vi phạm.",
        answers: [
            "Cả hai xe.",
            "Không xe nào vi phạm.",
            "Chỉ xe mô tô vi phạm.",
            "Chỉ xe tải vi phạm."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/509.webp"),
        title: "Xe nào đỗ vi phạm quy tắc giao thông?",
        explanation: "Xe tải đậu trái đường; Xe con và mô tô đậu xe đè vạch nên cả 3 xe vi phạm.",
        answers: [
            "Chỉ mô tô.",
            "Chỉ xe tải.",
            "Cả ba xe.",
            "Chỉ mô tô và xe tải."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/510.webp"),
        title: "Xe tải kéo mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
        explanation: "Xe tải kéo xe mô tô 3 bánh như trên hình là không đúng vì đi vào đường có biển P.108 “Cấm ô tô kéo moóc” kể cả xe máy kéo, xe ô tô khách kéo theo rơ moóc đi qua.",
        answers: [
            "Đúng.",
            "Không đúng."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/511.webp"),
        title: "Theo hướng mũi tên, hướng nào xe không được phép đi?",
        explanation: "Hướng 1 có biển cấm ô tô nên xe ô tô đương nhiên không được phép đi vào rồi.",
        answers: [
            "Hướng 2 và 5.",
            "Chỉ hướng 1."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/512.webp"),
        title: "Theo hướng mũi tên, những hướng nào ô tô không được phép đi?",
        explanation: "Biển P.123a “Cấm rẽ trái” không cấm quay đầu xe nên chỉ có hướng 3 là hướng ô tô không được phép đi.",
        answers: [
            "Hướng 1 và 2.",
            "Hướng 3.",
            "Hướng 1 và 4.",
            "Hướng 2 và 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/513.webp"),
        title: "Xe nào vượt đúng quy tắc giao thông?",
        explanation: "Biển số P.126 “Cấm ô tô tải vượt” nên không áp dụng với xe con và xe khách.",
        answers: [
            "Cả 2 xe đều đúng.",
            "Xe con.",
            "Xe khách."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/514.webp"),
        title: "Theo hướng mũi tên, gặp biển hướng đi phải theo đặt trước ngã tư, những hướng nào xe được phép đi?",
        explanation: "Biển số R.301g được đặt trước ngã ba, ngã tư. Các xe chỉ được phép đi thẳng hay rẽ trái ở khu vực sau mặt biển và được phép quay đầu xe để đi theo hướng ngược lại.Đáp án đúng là hướng 2 và hướng 3.",
        answers: [
            "Hướng 2 và 3.",
            "Hướng 1, 2 và 3.",
            "Hướng 1 và 3."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/515.webp"),
        title: "Xe kéo nhau như hình này có vi phạm quy tắc giao thông không?",
        explanation: "Xe kéo rơ moóc, xe kéo sơ mi rơ moóc đã kéo rơ moóc thì không được kéo thêm xe khác nên trường hợp này là vi phạm.",
        answers: [
            "Không.",
            "Vi phạm."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/516.webp"),
        title: "Xe nào phải nhường đường trong trường hợp này?",
        explanation: "Phía trước xe tải có biển báo được ưu tiên qua đường hẹp nên được đi trước.Hoặc phía trước xe khách có biển báo nhường cho xe ngược chiều qua đường hẹp.",
        answers: [
            "Xe khách.",
            "Xe tải."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/517.webp"),
        title: "Xe nào được quyền đi trước trong trường hợp này?",
        explanation: "Đèn xanh nên áp dụng quy tắc Đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. Nên đáp án đúng là Xe xích lô rẽ phải đi trước.",
        answers: [
            "Xe con.",
            "Xe mô tô."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/518.webp"),
        title: "Xe kéo nhau trong trường hợp này đúng quy định không?",
        explanation: "Xe đầu kéo (xe containter) đã kéo rơmoóc, sơmi rơmoóc không được phép kéo thêm rơmoóc hoặc xe khác, vật khác.",
        answers: [
            "Không đúng.",
            "Đúng."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/519.webp"),
        title: "Theo hướng mũi tên, những hướng nào ô tô con được phép đi?",
        explanation: "Biển số R.301d “Chỉ được rẽ phải” chỉ áp dụng với xe tải (biển phụ) nên không áp dụng với xe con. Hướng 2 cấm xe con không được đi vào, còn hướng 1, 3 và 4 xe con đều được phép đi.",
        answers: [
            "Hướng 1.",
            "Hướng 1, 3 và 4.",
            "Hướng 2, 3 và 4.",
            "Cả bốn hướng."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/520.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao  thông?",
        explanation: "Thứ tự ưu tiên đường cùng cấp: Xe ưu tiên - Đường ưu tiên - Bên phải trống - rẽ phải - đi thẳng - rẽ trái. 1. Mô tô và xe đạp: Bên phải trống; 2. Xe con (A): đi thẳng; 3. Xe con (B): Rẽ trái.",
        answers: [
            "Xe con (A), mô tô, xe con (B), xe đạp.",
            "Xe con (B), xe đạp, mô tô, xe con (A).",
            "Xe con (A), xe con (B), mô tô + xe đạp.",
            "Mô tô + xe đạp, xe con (A), xe con (B)."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/521.webp"),
        title: "Theo hướng mũi tên, những hướng nào xe tải được phép đi?",
        explanation: "Biển số R.301d “Chỉ được rẽ phải” áp dụng với xe tải (biển phụ) nên hướng 3, 4 rẽ trái bị cấm.Hướng 2 có biển cấm xe tải đi vào.Nên xe tải chỉ có thể chạy theo hướng 1 là đáp án đúng.",
        answers: [
            "Chỉ hướng 1.",
            "Hướng 1, 3 và 4.",
            "Hướng 1, 2 và 3.",
            "Cả bốn hướng."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/522.webp"),
        title: "Những hướng nào xe tải được phép đi?",
        explanation: "Xe tải cấm rẽ phải (biển phụ) nên chỉ đi được hướng 2 và hướng 3.",
        answers: [
            "Cả ba hướng.",
            "Hướng 2 và 3."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/523.webp"),
        title: "Những hướng nào ô tô tải được phép đi?",
        explanation: "Hướng 2,3,4 bị cấm do có biển cấm xe ô tô đi vào.Hướng 1 và 5 xe tải đi được bình thường.",
        answers: [
            "Chỉ hướng 1.",
            "Hướng 1 và 4.",
            "Hướng 1 và 5.",
            "Hướng 1, 4 và 5."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/524.webp"),
        title: "Những hướng nào ô tô tải được phép đi?",
        explanation: "Hướng 2 có biển cấm xe tải nên xe tải không được phép đi vào.",
        answers: [
            "Cả bốn hướng.",
            "Trừ hướng 2.",
            "Hướng 2, 3 và 4.",
            "Trừ hướng 4."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/525.webp"),
        title: "Xe nào được quyền đi trước trong trường hợp này?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. Xe mô tô rẽ trái từ đường ưu tiên vào đường ưu tiên (theo biển báo và biển phụ) nên được quyền đi trước.",
        answers: [
            "Mô tô.",
            "Xe con."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/526.webp"),
        title: "Ô tô con đi theo chiều mũi tên có vi phạm quy tắc giao thông không?",
        explanation: "Biển số R.301a được đặt trước ngã ba, ngã tư. Các xe chỉ được đi thẳng ở khu vực ngã ba, ngã tư.",
        answers: [
            "Không vi phạm.",
            "Vi phạm."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/527.webp"),
        title: "Xe nào vi phạm quy tắc giao thông?",
        explanation: "Xe con quay đầu đè vạch liền trên đường nên vi phạm.",
        answers: [
            "Xe khách.",
            "Mô tô.",
            "Xe con.",
            "Xe con và mô tô."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/528.webp"),
        title: "Các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Giơ tay thẳng đứng: Tất cả dừng, trừ xe đã ở trong ngã tư được phép đi;Giang ngang tay: Trái phải đi; Trước sau dừng;Tay phải giơ trước: Sau, phải dừng, trước rẽ phải, trái đi các hướng, người đi bộ qua đường đi sau người điều khiển.",
        answers: [
            "Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
            "Cho phép các xe ở mọi hướng được phép rẽ phải.",
            "Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/529.webp"),
        title: "Theo hướng mũi tên, xe nào được phép đi?",
        explanation: "Giang ngang tay: Trái phải đi; Trước sau dừng. Xe mô tô và xe tải được phép đi là đáp án đúng.",
        answers: [
            "Mô tô, xe con.",
            "Xe con, xe tải.",
            "Mô tô, xe tải.",
            "Cả ba xe."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/530.webp"),
        title: "Xe con vượt xe tải như trường hợp này có đúng không?",
        explanation: "Xe con đi thẳng và xe tải rẽ trái không giao nhau nên được phép vượt trong trường hợp này.",
        answers: [
            "Đúng.",
            "Không đúng."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/531.webp"),
        title: "Xe nào vượt đúng quy tắc giao thông?",
        explanation: "Theo hướng xe tải, vượt xe khách đè vạch liền nên vi phạm. Theo hướng xe con, xe con vượt xe tải đè vạch đứt nên không vi phạm quy tắc giao thông là đáp án đúng.",
        answers: [
            "Xe tải.",
            "Cả hai xe.",
            "Xe con."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/532.webp"),
        title: "Đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        explanation: "Biển cấm xe ngược chiều không có tác dụng với xe chữa cháy (xe ưu tiên) nên không vi phạm.Trước mặt xe tải có biển cấm rẽ trái và quay đầu nên vi phạm là đáp án đúng.",
        answers: [
            "Xe chữa cháy.",
            "Xe tải.",
            "Cả hai xe."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/533.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe tải: Rẽ phải; 2. Xe khách: đi thẳng; 3. Xe con: Rẽ trái.",
        answers: [
            "Xe khách, xe tải, xe con.",
            "Xe con, xe tải, xe khách.",
            "Xe tải, xe khách, xe con."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/534.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe khách và xe tải cùng rẽ phải nên cùng nhau đi trước. Hãy nhìn đáp án có chữ “VÀ”.",
        answers: [
            "Xe khách và xe tải, xe con.",
            "Xe tải, xe khách, xe con.",
            "Xe con, xe khách, xe tải."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/535.webp"),
        title: "Những hướng nào ô tô tải được phép đi?",
        explanation: "Biển số P.102 “Cấm đi ngược chiều” ở hướng 4 nên hướng này không được phép đi.",
        answers: [
            "Cả bốn hướng.",
            "Chỉ hướng 1 và 2.",
            "Trừ hướng 4."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/536.webp"),
        title: "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe công an: Xe ưu tiên; 2. Xe con: đường ưu tiên, bên phải trống; 3. Xe tải: đường ưu tiên, bên phải vướng xe con nếu đi trước;4. Xe khách: đường không ưu tiên.",
        answers: [
            "Xe công an, xe con, xe tải, xe khách.",
            "Xe con, xe khách và xe công an, xe tải.",
            "Xe công an, xe con, xe khách, xe tải.",
            "Xe con, xe tải, xe khách, xe công an."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/537.webp"),
        title: "Những hướng nào ô tô tải được phép đi?",
        explanation: "Trước mặt xe tải là Biển số P.123a “Cấm rẽ trái” không cấm quay đầu (hướng 3).Hướng 4 là Biển số P.109 “Cấm máy kéo” không cấm xe tải.Nên các hướng 1, 3 và 4 là câu trả lời đúng.",
        answers: [
            "Cả bốn hướng.",
            "Hướng 1, 2 và 3.",
            "Hướng 1 và 4.",
            "Hướng 1, 3 và 4."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/538.webp"),
        title: "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
        explanation: "Xe khách chờ đèn đỏ rẽ trái. Xe tải đi thẳng và rẽ phải theo tín hiệu đèn xanh. Xe con đi thẳng và rẽ phải theo tín hiệu đèn xanh. Xe mô tô chờ đèn đỏ rẽ trái. Nên tất cả xe đều chấp hành.",
        answers: [
            "Chỉ xe khách, mô tô.",
            "Tất cả các loại xe trên.",
            "Không xe nào chấp hành đúng quy tắc giao thông."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/539.webp"),
        title: "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
        explanation: "Hướng 2 có Biển số P.104 “Cấm mô tô”. Hướng 3 Biển số P.103a “Cấm ô tô” nhưng không cấm mô tô. Nên đáp án đúng là hướng 1 và hướng 3.",
        answers: [
            "Cả ba hướng.",
            "Hướng 1 và 2.",
            "Hướng 1 và 3.",
            "Hướng 2 và 3."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/540.webp"),
        title: "Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe quân sự: Xe ưu tiên cùng cấp xe công an nhưng đi thẳng; 2. Xe công an: Xe ưu tiên; rẽ trái; 3. Xe con và xe mô tô: Cùng đi thẳng.",
        answers: [
            "Xe công an, xe quân sự, xe con + mô tô.",
            "Xe quân sự, xe công an, xe con + mô tô.",
            "Xe mô tô + xe con, xe quân sự, xe công an."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/541.webp"),
        title: "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        explanation: "Xe xuống dốc A phải nhường đường cho xe đang lên dốc B.",
        answers: [
            "Xe A.",
            "Xe B."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/542.webp"),
        title: "Xe con quay đầu đi ngược lại như hình vẽ dưới có vi phạm quy tắc giao thông không?",
        explanation: "Xe con quay đầu đè vạch nên vi phạm.",
        answers: [
            "Không vi phạm.",
            "Vi phạm."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/543.webp"),
        title: "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        explanation: "Xe mô tô C chạy vào làn dành riêng xe ô tô: Vi phạm; Xe con E chạy vào làn dành riêng xe máy: Vi phạm.",
        answers: [
            "Xe con (E), mô tô (C).",
            "Xe tải (A), mô tô (D).",
            "Xe khách (B), mô tô (C).",
            "Xe khách  (B), mô tô (D)."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/544.webp"),
        title: "Để điều khiển cho xe đi thẳng, người lái xe phải làm gì là đúng quy tắc giao thông?",
        explanation: "Người lái xe phải nhường đường xe con rẽ trái trước vì xe con rẽ trái đã vào nơi giao nhau trước (đã qua vạch).",
        answers: [
            "Nhường xe con rẽ trái trước.",
            "Đi thẳng không nhường."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/545.webp"),
        title: "Người lái xe điều khiển xe chạy theo hướng nào là đúng quy tắc giao thông?",
        explanation: "Hướng 4: Biển số P.123b “Cấm rẽ phải”; Hướng 3: Biển số P.102 “Cấm đi ngược chiều”;Nên chỉ có thể đi theo hướng 1 và hướng 2 là câu trả lời đúng.",
        answers: [
            "Chỉ hướng 2.",
            "Hướng 1 và 2.",
            "Tất cả các hướng trừ hướng 3.",
            "Tất cả các hướng trừ hướng 4."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/546.webp"),
        title: "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        explanation: "Xe con (A) đang đi trước và xi nhan trái nên được đi trước, xe con (B) xi nhan phải và đi sau nên phải nhường.",
        answers: [
            "Xe con (A).",
            "Xe con (B)."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/547.webp"),
        title: "Người lái xe điều khiển xe rẽ trái như thế nào là đúng quy tắc giao thông?",
        explanation: "Xe tải đã vào nơi giao nhau trước nên được đi đầu tiên; Tiếp theo xe buýt: đi thẳng; Cuối cùng là xe của bạn: Rẽ trái.",
        answers: [
            "Rẽ trái ngay trước xe buýt.",
            "Rẽ trái trước xe tải.",
            "Nhường đường cho xe buýt và xe tải."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/548.webp"),
        title: "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        explanation: "Nhìn vào bảng chỉ dẫn loại phương tiện theo làn đường: Xe con (E) đi trên làn dành riêng cho mô tô nên vi phạm: Xe mô tô (D) chạy trên làn dành riêng xe ô tô nên cũng vi phạm.",
        answers: [
            "Xe con (B), mô tô (C).",
            "Xe con (A), mô tô (C).",
            "Xe con (E), mô tô (D).",
            "Tất cả các loại xe trên."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/549.webp"),
        title: "Xe nào đi trước là đúng quy tắc giao thông?",
        explanation: "Trước mặt xe của bạn có Biển số W.208 “Giao nhau với đường ưu tiên” nên phải ưu tiên các xe đang đi trên đường ưu tiên. Xe tải được ưu tiên trong trường hợp này.",
        answers: [
            "Xe của bạn.",
            "Xe tải."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/550.webp"),
        title: "Người lái xe có thể quay đầu xe như thế nào là đúng quy tắc giao thông?",
        explanation: "Trước mặt người lái xe có Biển số P.123a “Cấm rẽ trái” không cấm quay đầu. Tuy nhiên, hướng B quay đầu đè vạch liền nên vi phạm. Do đó, chỉ có hướng A quay đầu xe là câu trả lời đúng.",
        answers: [
            "Quay đầu theo hướng A.",
            "Quay đầu theo hướng B.",
            "Cấm quay đầu."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/551.webp"),
        title: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. Xe bạn đang trên đường ưu tiên nên được đi trước. Xe con rẽ phải không giao nhau với xe bạn nên được đi đồng thời với xe bạn. Xe tải rẽ trái từ đường không ưu tiên phải nhường đi sau cùng.",
        answers: [
            "Xe con và xe tải, xe của bạn.",
            "Xe của bạn, xe tải, xe con.",
            "Xe của bạn và xe con, xe tải.",
            "Xe của bạn, xe tải + xe con."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/552.webp"),
        title: "Khi muốn vượt xe tải, người lái xe phải làm gì là đúng quy tắc giao thông?",
        explanation: "Chú ý vạch kẻ đường ngăn cách với làn bên trái là vạch liền. Bạn phải bật tín hiệu báo hiệu cho đến khi xe tải phía trước giảm tốc độ và chuyển qua làn bên phải thì bạn mới có thể tăng tốc cho xe vượt qua.",
        answers: [
            "Tăng tốc cho xe chạy vượt qua.",
            "Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.",
            "Đánh lái sang làn bên trái và tăng tốc cho xe chạy vượt qua."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/553.webp"),
        title: "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
        explanation: "Xe con và xe tải đang ở trên làn đường có tín hiệu đèn đỏ nên phải dừng lại.",
        answers: [
            "Xe khách, mô tô.",
            "Xe tải, mô tô.",
            "Xe con, xe tải."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/554.webp"),
        title: "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe tải đi thẳng không phải nhường đường vì không vướng xe nào cả; 2. Xe con: Rẽ phải; 3. Xe khách: đi thẳng nên phải nhường xe con là câu trả lời đúng.",
        answers: [
            "Xe tải.",
            "Xe khách.",
            "Xe con."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/555.webp"),
        title: "Người lái xe có được phép vượt xe tải để đi thẳng trong trường hợp này không?",
        explanation: "Tại nơi giao nhau, trên đoạn đường có làn đường dành cho người đi bộ cắt ngang thì không được phép vượt.",
        answers: [
            "Được vượt.",
            "Cấm vượt."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/556.webp"),
        title: "Bạn có được phép vượt xe mô tô phía trước không?",
        explanation: "Tại nơi giao nhau, trên đoạn đường có làn đường dành cho người đi bộ cắt ngang thì không được phép vượt.",
        answers: [
            "Cho phép.",
            "Không được vượt."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/557.webp"),
        title: "Người lái xe dừng tại vị trí nào là đúng quy tắc giao thông?",
        explanation: "Vị trí A vi phạm do dừng bên trái đường.Biển số P.131a “Cấm đỗ xe” không cấm dừng xe. Do đó vị trí dừng tại B và C là câu trả lời đúng.",
        answers: [
            "Vị trí A và B.",
            "Vị trí A và C.",
            "Vị trí B và C.",
            "Cả ba vị trí A, B, C."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/558.webp"),
        title: "Bạn được dừng xe ở vị trí nào trong tình huống này?",
        explanation: "Biển số P.130 “Cấm dừng xe và đỗ xe” và biển phụ báo phạm vi trước và sau biển báo nên không được phép dừng xe tại cả 2 vị trí A và B.",
        answers: [
            "Được phép dừng ở vị trí A.",
            "Được phép dừng ở vị trí B.",
            "Được phép dừng ở vị trí A và B.",
            "Không được dừng."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/559.webp"),
        title: "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
        explanation: "Biển số R.301a chỉ cho phép các phương tiện đi thẳng trong khi cả hai xe đều có tín hiệu xi nhan rẽ sang hướng khác nên cả 2 xe đều vi phạm quy tắc giao thông.",
        answers: [
            "Xe mô tô.",
            "Xe ô tô con.",
            "Không xe nào vi phạm.",
            "Cả hai xe."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/560.webp"),
        title: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        explanation: "Xe con trong cả hai phía đều đang ở đúng làn đường và đi theo hướng mà đèn xanh đang bật nên đúng quy tắc. Xe tải trong cả hai phía đều ở sai làn đường so với hướng rẽ nên vi phạm quy tắc giao thông.",
        answers: [
            "Xe con.",
            "Xe tải.",
            "Xe con, xe tải."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/561.webp"),
        title: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        explanation: "Xe con và xe mô tô đang ở đúng làn đường, đúng hướng rẽ với tín hiệu đèn xanh nên đúng quy tắc giao thông. Xe khách và xe tải đang ở sai làn đường so với hướng rẽ nên đều vi phạm.",
        answers: [
            "Xe tải, xe con.",
            "Xe khách, xe con.",
            "Xe khách, xe tải."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/562.webp"),
        title: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        explanation: "Xe con đi đúng làn đường theo hướng rẽ và tín hiệu đèn. Xe khách: Sai làn đường và tín hiệu đèn. Xe tải: đi thẳng vi phạm đèn đỏ. Xe mô tô: đi thẳng vi phạm đèn đỏ.",
        answers: [
            "Xe con, xe tải, xe khách.",
            "Xe tải, xe khách, xe mô tô.",
            "Xe khách, xe mô tô, xe con.",
            "Cả bốn xe."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/563.webp"),
        title: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        explanation: "Xe con đúng làn đường và tín hiệu đèn. Xe khách: Sai làn đường; Xe tải: Sai làn đường và tín hiệu đèn.",
        answers: [
            "Xe khách, xe tải.",
            "Xe khách, xe con.",
            "Xe con, xe tải.",
            "Xe khách, xe tải, xe con."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/564.webp"),
        title: "Trong tình huống dưới đây, để tránh xe phía trước bị hỏng đột xuất trên đường, người lái xe phải làm gì?",
        explanation: "Chú ý quan sát, bật tín hiệu đèn, còi rồi mới được vượt nên Đáp án 2 trong trường hợp này mô tả chính xác.",
        answers: [
            "Đánh lái sang trái cho xe vượt qua.",
            "Quan sát phía trước, phía sau, khi đủ điều kiện an toàn, bật tín hiệu bằng đèn hoặc còi rồi cho xe chạy vượt qua.",
            "Cấm vượt."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/565.webp"),
        title: "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
        explanation: "Xe con và xe tải: Vi phạm tín hiệu đèn;Xe khách và xe mô tô: đúng làn đường và đúng tín hiệu đèn.",
        answers: [
            "Xe tải, mô tô.",
            "Xe khách, mô tô.",
            "Xe tải, xe con.",
            "Mô tô, xe con."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/566.webp"),
        title: "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        explanation: "Xe con (B) và xe tải (D) đang đè lên vạch liền phân tách làn đường nên vi phạm quy tắc giao thông.",
        answers: [
            "Xe con (A), xe con (B), xe tải (D).",
            "Xe tải (D), xe con (E), xe buýt (G).",
            "Xe tải ( D), xe con (B).",
            "Xe con (B), xe con (C)."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/567.webp"),
        title: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.Biển báo phía trước là đường ưu tiên và biển phụ báo hướng di chuyển của xe mô tô là hướng ưu tiên. 1. Xe mô tô: đường ưu tiên; 2. Xe con: đường không ưu tiên, bên phải trống; 3. Xe của bạn: đường không ưu tiên, bên phải vướng xe con.",
        answers: [
            "Xe của bạn, mô tô , xe con.",
            "Xe con, xe của bạn, mô tô.",
            "Mô tô, xe con, xe của bạn."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/568.webp"),
        title: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp: Bên phải trống, rẽ phải, đi thẳng, rẽ trái. 1. Xe con: Rẽ phải; 2. Xe của bạn: đi thẳng; 3. Mô tô: Rẽ trái.",
        answers: [
            "Xe của bạn, mô tô, xe con.",
            "Xe con, xe của bạn, mô tô.",
            "Mô tô, xe con, xe của bạn."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/569.webp"),
        title: "Xe nào phải dừng lại trong trường hợp này?",
        explanation: "Xe con dừng lại vì phía trước là tín hiệu đèn đỏ. Xe của bạn được đi vì rẽ phải trước đèn đỏ nên không vi phạm.",
        answers: [
            "Xe con.",
            "Xe của bạn.",
            "Cả hai xe."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/570.webp"),
        title: "Xe của bạn được đi theo hướng nào trong trường hợp này?",
        explanation: "Làn đường mà xe của bạn đang đi chỉ được đi thẳng hoặc rẽ trái thôi. Nếu bạn chọn rẽ phải là bị đèn tín hiệu nó lừa rồi đó.",
        answers: [
            "Đi thẳng, rẽ trái.",
            "Đi thẳng, rẽ phải.",
            "Rẽ trái.",
            "Đi thẳng, rẽ phải, rẽ trái."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/571.webp"),
        title: "Xe của bạn được đi theo hướng nào trong trường hợp này?",
        explanation: "Bạn phải dừng lại chờ đèn đỏ và làn đường bạn đang dừng xe chỉ được rẽ trái hoặc đi thẳng khi đèn xanh.",
        answers: [
            "Chuyển sang làn đường bên phải và rẽ phải.",
            "Dừng lại trước vạch dừng và rẽ phải khi đèn xanh.",
            "Dừng lại trước vạch dừng và đi thẳng hoặc rẽ trái khi đèn xanh."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/572.webp"),
        title: "Bạn xử lý như thế nào trong trường hợp này?",
        explanation: "Xe tải đã vào nơi giao nhau trước nên sẽ được ưu tiên trước. Biển báo phía trước là đường ưu tiên dành cho xe thô sơ nên phải nhường đường cho xe đạp. Do đó, xe bạn rẽ phải sau xe tải và xe đạp.",
        answers: [
            "Tăng tốc độ, rẽ phải trước xe tải và xe đạp.",
            "Giảm tốc độ, rẽ phải sau xe tải và xe đạp.",
            "Tăng tốc độ, rẽ phải trước xe đạp."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/573.webp"),
        title: "Bạn xử lý như thế nào trong trường hợp này?",
        explanation: "Ở vạch kẻ đường dành cho người đi bộ có người chuẩn bị sang đường nên phải nhường đường và không được phép vượt.Nên bạn phải nhường đường cho người đi bộ và rẽ phải sau xe con màu xanh.",
        answers: [
            "Tăng tốc độ, rẽ phải trước xe con màu xanh phía trước và người đi bộ.",
            "Giảm tốc độ, để người đi bộ qua đường và rẽ phải trước xe con màu xanh.",
            "Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/574.webp"),
        title: "Bạn xử lý như thế nào trong trường hợp này?",
        explanation: "Trước mặt bạn có biển Biển số R.122 “Dừng lại” nên phải dừng xe và nhường đường. Nên xe của bạn phải nhường đường cho xe đạp và xe khách.",
        answers: [
            "Nhường đường cho xe khách và đi trước xe đạp.",
            "Nhường đường cho xe đạp và đi trước xe khách.",
            "Nhường đường cho xe đạp và xe khách."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/575.webp"),
        title: "Xe nào phải nhường đường trong trường hợp này?",
        explanation: "Biển W.207c “Giao nhau với đường không ưu tiên” cho biết xe tải đi từ đường không ưu tiên nên phải nhường đường.",
        answers: [
            "Xe con.",
            "Xe tải.",
            "Xe của bạn."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/576.webp"),
        title: "Xe nào phải nhường đường trong trường hợp này?",
        explanation: "Xe bạn không thể vượt khi phía trước có chướng ngại vật hoặc xe đi ngược chiều. Nên xe bạn phải nhường đường trong tình huống này.",
        answers: [
            "Xe đi ngược chiều.",
            "Xe của bạn."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/577.webp"),
        title: "Bạn xử lý như thế nào khi lái xe ô tô vượt qua đoàn người đi xe đạp có tổ chức?",
        explanation: "Xe của bạn không được vượt khi bên trái có chướng ngại vật hay xe ngược chiều.",
        answers: [
            "Tăng tốc độ, chuyển sang làn đường bên trái để vượt.",
            "Không được vượt những người đi xe đạp."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/578.webp"),
        title: "Phía trước có một xe đang lùi vào nơi đỗ, xe con phía trước đang chuyển sang làn đường bên trái, bạn xử lý như thế nào trong trường hợp này?",
        explanation: "Cần quan sát kỹ xe phía sau trong tình huống này để có hành động hợp lý. Nếu không có xe xin vượt chuyển làn trái đi tiếp. Nếu có xe xin vượt thì giảm tốc độ, ở lại làn đường hoặc dừng lại nếu cần thiết.",
        answers: [
            "Nếu phía sau không có xe xin vượt, chuyển sang làn đường bên trái.",
            "Nếu phía sau có xe xin vượt, thì giảm tốc độ, ở lại làn đường, dừng lại khi cần thiết.",
            "Tăng tốc độ trên làn đường của mình và vượt xe con.",
            "Cả ý 1 và ý 2."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/579.webp"),
        title: "Bạn xử lý như thế nào khi xe phía trước đang lùi ra khỏi nơi đỗ?",
        explanation: "Không được vượt khi phía trước có chướng ngại vật hay xe chạy ngược chiều. Do đó, cần giảm tốc độ, dừng lại nhường đường.",
        answers: [
            "Chuyển sang nửa đường bên trái để đi tiếp.",
            "Bấm còi, nháy đèn báo hiệu và đi tiếp.",
            "Giảm tốc độ, dừng lại nhường đường."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/580.webp"),
        title: "Phía trước có một xe màu xanh đang vượt xe màu vàng trên làn đường của bạn, bạn xử lý như thế nào trong trường hợp này?",
        explanation: "Vì xe màu xanh đang trên làn đường của bạn, để đảm bảo an toàn, bạn cần phanh xe giảm tốc độ và đi sát lề đường bên phải.",
        answers: [
            "Phanh xe giảm tốc độ và đi sát lề đường bên phải.",
            "Bấm còi, nháy đèn báo hiệu, giữ nguyên tốc độ và đi tiếp.",
            "Phanh xe giảm tốc độ và đi sát vào lề đường bên trái."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/581.webp"),
        title: "Xe tải phía trước có tín hiệu xin chuyển làn đường, bạn xử lý như thế nào trong trường hợp này?",
        explanation: "Không được vượt khi phía trước có xe đang chuyển làn đường. Do đó, để đảm bảo an toàn bạn cần phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
        answers: [
            "Bật tín hiệu xin chuyển làn đường sang trái để vượt xe tải.",
            "Phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
            "Bấm còi báo hiệu và vượt qua xe tải trên làn đường của mình."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/582.webp"),
        title: "Bạn xử lý như thế nào trong trường hợp này?",
        explanation: "Trước mặt là Biển số W.208 “Giao nhau với đường ưu tiên” nên bạn phải giảm tốc độ, quan sát nhường đường ưu tiên nếu có và đi qua ngã tư.",
        answers: [
            "Tăng tốc độ và đi thẳng qua ngã tư.",
            "Dừng xe trước vạch dừng.",
            "Giảm tốc độ và đi thẳng qua ngã tư."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/583.webp"),
        title: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe đạp: Bên phải trống; 2. Xe mô tô: đi thẳng; 3. Xe của bạn: Rẽ trái.",
        answers: [
            "Xe của bạn, mô tô, xe đạp.",
            "Xe mô tô, xe đạp, xe của bạn.",
            "Xe đạp, xe mô tô, xe của bạn."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/584.webp"),
        title: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe của bạn: đường ưu tiên; 2. Xe con: đi không ưu tiên, đi thẳng; 3. Xe tải: đường không ưu tiên, rẽ trái.",
        answers: [
            "Xe của bạn, xe tải, xe con.",
            "Xe con, xe tải, xe của bạn.",
            "Xe tải, xe của bạn, xe con.",
            "Xe của bạn, xe con, xe tải."
        ],
        correctIdx: 3
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/585.webp"),
        title: "Xe nào phải nhường đường trong trường hợp này?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe con: đường ưu tiên; 2. Xe của bạn: đường không ưu tiên nên phải nhường đường.",
        answers: [
            "Xe của bạn.",
            "Xe con."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/586.webp"),
        title: "Xe nào phải nhường đường trong trường hợp này?",
        explanation: "Trước mặt xe của bạn có Biển số P.132 “Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp” nên phải nhường đường.",
        answers: [
            "Xe con.",
            "Xe của bạn."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/587.webp"),
        title: "Bạn xử lý như thế nào trong trường hợp này?",
        explanation: "Trước mặt bạn có biển I.423a “Đường người đi bộ sang ngang” nên bạn phải giảm tốc độ và nhường đường cho người đi bộ sang đường.",
        answers: [
            "Tăng tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
            "Giảm tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
            "Giảm tốc độ , để người đi bộ sang đường trước, sau đó cho xe đi qua vạch người đi bộ sang đường."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/588.webp"),
        title: "Xe nào được đi trước trong trường hợp này?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. Xe của bạn trên đường ưu tiên (theo biển báo) nên được đi trước.",
        answers: [
            "Xe con.",
            "Xe của bạn."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/589.webp"),
        title: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe tải: Bên phải trống; 2. Xe con: đi thẳng; 3. Xe của bạn: Rẽ trái.",
        answers: [
            "Xe con, xe tải, xe của bạn.",
            "Xe tải, xe con, xe của bạn.",
            "Xe tải, xe của bạn, xe con."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/590.webp"),
        title: "Bạn xử lý như thế nào trong trường hợp này?",
        explanation: "Phía trước khuất tầm nhìn, bên trái làn đường là vạch liền nên bạn cần phải giảm tốc độ, đi sát làn đường bên phải để đảm bảo đi đúng làn đường.",
        answers: [
            "Tăng tốc độ cho xe lấn sang phần đường bên trái.",
            "Giảm tốc độ cho xe lấn sang phần đường bên trái.",
            "Giảm tốc độ cho xe đi sát phần đường bên phải."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/591.webp"),
        title: "Xe nào được đi trước trong trường hợp này?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe tải: đi thẳng; 2. Xe của bạn: Rẽ trái.",
        answers: [
            "Xe tải.",
            "Xe của bạn."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/592.webp"),
        title: "Xe nào dừng đúng theo quy tắc giao thông?",
        explanation: "Biển số W.211a “Giao nhau với đường sắt không có rào chắn” thì các phương tiện đứng cách xa đường sắt tối thiểu 5m nên xe con đúng.",
        answers: [
            "Xe con.",
            "Xe mô tô.",
            "Cả 2 xe đều đúng."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/593.webp"),
        title: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        explanation: "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái. 1. Xe của bạn: Bên phải trống, đi thẳng; 2. Xe tải: Rẽ trái, bên phải trống (khi xe bạn đã đi rồi); 3. Xe đạp: Rẽ trái.",
        answers: [
            "Xe tải, xe đạp, xe của bạn.",
            "Xe của bạn, xe đạp, xe tải.",
            "Xe của bạn, xe tải, xe đạp."
        ],
        correctIdx: 2
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/594.webp"),
        title: "Để điều khiển xe rẽ trái, bạn chọn hướng đi nào dưới đây?",
        explanation: "Vạch kẻ đường nét đứt màu vàng, phân chia 2 chiều xe chạy. Do đó, hướng 2 sẽ đi bên trái đường 1 đoạn nên không được phép. Do đó, bạn chỉ được chọn theo hướng 1 để rẽ trái.",
        answers: [
            "Hướng 1.",
            "Hướng 2.",
            "Cả 02 hướng đều được."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/595.webp"),
        title: "Khi gặp xe ngược chiều bật đèn pha trong tình huống dưới dây, bạn xử lý như thế nào?",
        explanation: "Giữ nguyên đèn chiếu gần và giảm tốc độ do không thể quan sát rõ phía trước.",
        answers: [
            "Bật đèn chiếu xa, tăng tốc độ vượt xe cùng chiều.",
            "Giữ nguyên đền chiếu gần, giảm tốc độ, đi sau xe phía trước.",
            "Giữ nguyên đèn chiếu gần, tăng tốc độ vượt xe cùng chiều."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/596.webp"),
        title: "Xe của bạn đang di chuyển gần đến khu vực giao cắt với đường sắt, khi rào chắn đang dịch chuyển, bạn điều khiển xe như thế nào là đúng quy tắc giao thông?",
        explanation: "Bắt buộc phải dừng xe.",
        answers: [
            "Quan sát nếu thấy không có tàu thì tăng tốc cho xe vượt qua đường sắt.",
            "Dừng lại trước rào chắn một khoảng cách an toàn.",
            "Ra tín hiệu, yêu cầu người gác chắn tàu kéo chậm Barie để xe bạn qua."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/597.webp"),
        title: "Trong tình huống dưới đây, xe con màu đỏ nhập làn đường cao tốc theo hướng mũi tên là đúng hay sai?",
        explanation: "Khi nhập làn cao tốc phải chạy dọc theo làn tạm để đủ thời gian quan sát, khoảng cách an toàn và đủ tốc độ trước khi di chuyển vào làn cao tốc nên trong tình huống này xe màu đỏ sai khi nhập làn cao tốc.",
        answers: [
            "Đúng.",
            "Sai."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/598.webp"),
        title: "Trong tình huống dưới đây, xe con màu đỏ có được phép vượt khi xe con màu xanh đang vượt xe tải hay không?",
        explanation: "Xe xin vượt chỉ được vượt khi không có chướng ngại vật phía trước, không có xe chạy ngược chiều trong đoạn đường định vượt, xe chạy trước không có tín hiệu vượt xe khác và đã tránh về bên phải. Do đó, xe màu đỏ không được vượt.",
        answers: [
            "Được vượt.",
            "Không được vượt."
        ],
        correctIdx: 1
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/599.webp"),
        title: "Trong tình huống dưới đây, xe con màu vàng vượt xe con màu đỏ là đúng quy tắc giao thông hay không?",
        explanation: "Xe màu đỏ đang trách về phía bên phải, xe màu vàng đã có tín hiệu xin vượt, vạch kẻ đường theo hướng xe chạy là nét đứt , không có xe ngược chiều. Nên xe vàng vượt đúng quy tắc giao thông.",
        answers: [
            "Đúng.",
            "Không đúng."
        ],
        correctIdx: 0
    }, {
        img: generateImg("https://taplaixe.vn/assets/images/mcq/600.webp"),
        title: "Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh và xe máy phía sau xe container đi như thế nào để đảm bảo an toàn?",
        explanation: "Giảm tốc độ chờ xe đầu kéo rẽ phải rồi mới tiếp tục đi.",
        answers: [
            "Vượt về phía bên phải để đi tiếp.",
            "Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi.",
            "Vượt về phía bên trái để đi tiếp."
        ],
        correctIdx: 1
    }
];

export const CHAPTERS = [
    ...[
        { title: 'khái niệm và quy tắc giao thông đường bộ', questions: 165 },
        { title: 'nghiệp vụ vận tải', questions: 25 },
        { title: 'văn hóa giao thông và đạo đức người lái xe', questions: 20 },
        { title: 'kỹ thuật lái xe', questions: 55 },
        { title: 'cấu tạo và sửa chữa', questions: 34 },
        { title: 'hệ thống biển báo hiệu đường bộ', questions: 181 },
        { title: 'giải các thế sa hình và kỹ năng xử lý tình huống giao thông', questions: 113 },
    ].reduce((acc, curr) => {
        const { start: pStart = 0, questions: pQuestions = 0 } = acc?.[acc?.length - 1] || {};
        return ([
            ...acc,
            { ...curr, start: pStart + pQuestions + 1 }
        ]);
    }, []),
    {
        title: 'tình huống mất an toàn giao thông nghiêm trọng <b>(câu hỏi điểm liệt)</b>',
        questions: [
            17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33, 35,
            36, 37, 40, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 84, 91, 99, 101,
            109, 112, 114, 118, 119, 143, 145, 147, 150, 153, 154, 161, 199, 200,
            210, 211, 214, 221, 227, 231, 242, 245, 248, 258, 260, 261, 262
        ],
    },
]
