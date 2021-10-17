<h1 align="center">ເອກະສານນຳໃຊ້ API ຂອງ VDP_Management</h1> 


    MainAPI = location.protocol//location.host/api/


* [1. Login_API](#1.-Login)
* [2. User_API](#2.-User)
    * [2.1 Create User](#2.1-Create-User)
    * [2.2 Update User](#2.2-Update-User)
    * [2.3 Delete User](#2.3-Delete-User)
    * [2.4 User List All](#2.4-User-List-All)
    * [2.5 User List Page](#2.5-User-List-Page)
    * [2.6 Get User ](#2.6-Get-User)
* [3. Province_API](#3.-Province)
    * [3.1 Create province](#3.1-Create-province)
    * [3.2 Update province](#3.2-Update-province)
    * [3.3 Delete province](#3.3-Delete-province)
    * [3.4 province List All](#3.4-province-List-All)
    * [3.5 province List Page](#3.5-province-List-Page)
    * [3.6 Get province](#3.6-Get-province)
    * [3.7 Get AutoID province](#3.7-Get-AutoID-province)
* [4. District_API](#4.-District)
    * [4.1 Create District](#4.1-Create-District)
    * [4.2 Update District](#4.2-Update-District)
    * [4.3 Delete District](#4.3-Delete-District)
    * [4.4 District List All](#4.4-District-List-All)
    * [4.5 District List Page](#4.5-District-List-Page)
    * [4.6 Get District](#4.6-Get-District) (ຄົ້ນຫາ)
    * [4.7 Get AutoID District](#4.7-Get-AutoID-District)
    * [4.8 List All By DistrictID](#4.8-List-All-By-DistrictID) (ຄົ້ນຫາຂໍ້ມູນຕາມໄອດີເມືອງທີ່ສົ່ງຈາກ Page_list ໄປຫາ Page_edit)
    * [4.9 Get District By ProvinceID](#4.9-Get-District-By-ProvinceID) (dependent selected)
* [5. Village_API](#5.-Village)
    * [5.1 Create Village](#5.1-Create-Village)
    * [5.2 Update Village](#5.2-Update-Village)
    * [5.3 Delete Village](#5.3-Delete-Village)
    * [5.4 Village List All](#5.4-Village-List-All)
    * [5.5 Village List Page](#5.5-Village-List-Page)
    * [5.6 Get Village](#5.6-Get-Village) (ຄົ້ນຫາ)
    * [5.7 Get AutoID Village](#5.7-Get-AutoID-Village)
    * [5.8 List All By VillageID](#5.8-List-All-By-VillageID) (ຄົ້ນຫາຂໍ້ມູນຕາມໄອດີບ້ານທີ່ສົ່ງຈາກ Page_list ໄປຫາ Page_edit)
    * [5.9 Get Village By DistrictID](#5.9-Get-Village-By-DistrictID) (dependent selected) <br><br><br>

# 1. Login
    API	=  location.protocol//location.host/api/login
    
* ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ : <br>

        {
            "username" : "binrydara",
            "password" : "12345"
        }

         username : string       
         password : string



* ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">username</span> ຫຼື <span style="color: rgb(43, 255, 0);">password</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">username is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">password is emty!</span>  ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>

* ຖ້າຜູ້ໃຊ້ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">username</span> ແລະ <span style="color: rgb(43, 255, 0);">password</span> ມາຄົບແລ້ວ, ແຕ່ login ບໍ່ຜ່ານສະແດງວ່າຂໍ້ມູນທີ່ສົ່ງມາບໍ່ມີໃນຖານຂໍ້ມູນ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">Wrong username or password !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>

*	ຖ້າ login ຜ່ານ, ຜູ້ໃຊ້ຈະໄດ້ຮັບ <span style="color: rgb(43, 255, 0);">TOKEN</span> ຈາກ Server ແລະ ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">Welcome to my projects</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br><br>

# 2. User
	API	=	location.protocol//location.host/api/ ຊື່ຕໍ່ທ້າຍ


## 2.1 Create User 

    ຊື່ຕໍ່ທ້າຍ = addUser

* ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :<br>

        {
             "username" : "messi",
             "password" : "123456789"
        }

        username : string       
        password : string

*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">username</span> ຫຼື <span style="color: rgb(43, 255, 0);">password</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">username is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">password is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">username</span> ມາແລ້ວຊ້ຳກັບທີ່ມີໃນຖານຂໍ້ມູນ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">username already exist !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າເພີ່ມຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Add data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າເພີ່ມຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Add data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>

## 2.2 Update User


    ຊື່ຕໍ່ທ້າຍ = updateUser

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ

*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :<br>

        {
 	        "id" : 1,
            username" : "Rooney",
            password" : "123"
        }

	    id: number
        username: string
        password: string

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">id</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br> 
( <span style="color: rgb(252, 247, 0);">id is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">username</span> ຫຼື <span style="color: rgb(43, 255, 0);">password</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">username is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">password is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">username</span> ມາແລ້ວຊ້ຳກັບທີ່ມີໃນຖານຂໍ້ມູນ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">username already exist !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າແກ້ໄຂຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Update data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າແກ້ໄຂຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Update data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>

## 2.3 Delete User


        ຊື່ຕໍ່ທ້າຍ = deleteUser

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ

*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :<br>

        {
 	         "id":6
        }

        Id: number


*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">id</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">id is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າລຶບຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Delete data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າລຶບຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Delete data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>

## 2.4 User List All

        ຊື່ຕໍ່ທ້າຍ = listAllUser

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list All</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">is empty</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>


## 2.5 User List Page

        ຊື່ຕໍ່ທ້າຍ = listPageUser

*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :<br>

        {
 	    "page":1,
	    "limit":5
        }

        page: number
        limit: number

*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">page</span> ຫຼື <span style="color: rgb(43, 255, 0);">limit</span> ມາ, Server ຈະໃສ່ຄ່າພື້ນຖານແທນດັ່ງນີ້: <br>
<span style="color: rgb(252, 247, 0);">Page</span> = 1<br>
<span style="color: rgb(252, 247, 0);">Limit</span> = 10 <br><br><br>


## 2.6 Get User 

        ຊື່ຕໍ່ທ້າຍ = listOneUser

*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
 	         "id":6
        }

        Id: number

*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">id</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">id is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>


# 3. province
	API	=      location.protocol//location.host/api/ ຊື່ຕໍ່ທ້າຍ
## 3.1 Create province

        ຊື່ຕໍ່ທ້າຍ = addprovince

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
            "pr_id":"1",
            "pr_name":"ນະຄອນຫຼວງວຽງຈັນ",
            "pr_name_en":""

        }

                  ໄອດີແຂວງ:  pr_id: number
                    ຊື່ແຂວງ:  pr_name: string
         ຊື່ແຂວງ(ພາສາອັງກິດ):  pr_name_en: string

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">pr_id</span> ຫຼື <span style="color: rgb(43, 255, 0);">pr_name</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">pr_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">pr_name is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">pr_name</span> ມາແລ້ວຊໍ້າກັບທີ່ມີໃນຖານຂໍ້ມູນ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">pr_name already exist ! </span>) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າເພີ່ມຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Add data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າເພີ່ມຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Add data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>


## 3.2 Update province

        ຊື່ຕໍ່ທ້າຍ = updateprovince

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
            "pr_id":"1",
            "pr_name":"ນະຄອນຫຼວງວຽງຈັນ",
            "pr_name_en":"vientianeCapital"

        }

        pr_id: number
        pr_name: string
        pr_name_en: string

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">pr_id</span> ຫຼື <span style="color: rgb(43, 255, 0);">pr_name</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">pr_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">pr_name is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">pr_name</span> ມາແລ້ວຊໍ້າກັບທີ່ມີໃນຖານຂໍ້ມູນ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">pr_name already exist ! </span>) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າແກ້ໄຂຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Update data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າແກ້ໄຂຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Update data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>



## 3.3 Delete province

        ຊື່ຕໍ່ທ້າຍ = deleteprovince

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
                "pr_id":1
        }

        pr_id: number

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">pr_id</span>  ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">pr_id is emty!</span> ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າລຶບຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Delete data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າລຶບຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Delete data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>


## 3.4 province List All

        ຊື່ຕໍ່ທ້າຍ = listAllprovince

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list All</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">is empty</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>


## 3.5 province List Page

        ຊື່ຕໍ່ທ້າຍ = listPageprovince

*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :<br>

        {
 	        "page":1,
	        "limit":5
        }

        page: number
        limit: number

*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">page</span> ຫຼື <span style="color: rgb(43, 255, 0);">limit</span> ມາ, Server ຈະໃສ່ຄ່າພື້ນຖານແທນດັ່ງນີ້: <br>
<span style="color: rgb(252, 247, 0);">Page</span> = 1<br>
<span style="color: rgb(252, 247, 0);">Limit</span> = 6 <br><br><br>


## 3.6 Get province

        ຊື່ຕໍ່ທ້າຍ = listPageprovince_by

    # ເປັນການຄົ້ນຫາຕາມ pr_id , pr_name ຫຼື pr_name_en ກໍໄດ້
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
                "page":1,
                "limit":5,
                "pr_id":"1",
                "pr_name":"1",
                "pr_name_en":"1"

        }
        Page = number
        Limit = number
        pr_id: number
        pr_name: string
        pr_name_en: string

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list Page</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">data list Page</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>


## 3.7 Get AutoID province 

        ຊື່ຕໍ່ທ້າຍ =  getAutoIDprovince

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">get id success</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">is empty</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>


# 4. District
	API	=      location.protocol//location.host/api/ ຊື່ຕໍ່ທ້າຍ

## 4.1 Create District

        ຊື່ຕໍ່ທ້າຍ = adddistrict

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
            "dr_id":"1",
            "dr_name":"ໄຊທານີ",
            "dr_name_en":""
            "pr_id":"1",
        }

                         ໄອດີແຂວງ: pr_id: number
                         ໄອດີເມືອງ: dr_id: number
                           ຊື່ເມືອງ: dr_name: string
                ຊື່ເມືອງ(ພາສາອັງກິດ): dr_name_en: string

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">pr_id</span> ຫຼື  <span style="color: rgb(43, 255, 0);">dr_id</span> ຫຼື <span style="color: rgb(43, 255, 0);">dr_name</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">pr_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">dr_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">dr_name is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">dr_name</span> ມາແລ້ວຊໍ້າກັບທີ່ມີໃນຖານຂໍ້ມູນ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">dr_name already exist ! </span>) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າເພີ່ມຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Add data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າເພີ່ມຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Add data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>

## 4.2 Update District

        ຊື່ຕໍ່ທ້າຍ = updatedistrict

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
            "dr_id":"1",
            "dr_name":"ໄຊທານີ",
            "dr_name_en":"xaithany"
            "pr_id":"1",

        }

        pr_id: number
        dr_id: number
        dr_name: string
        dr_name_en: string

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">pr_id</span> ຫຼື  <span style="color: rgb(43, 255, 0);">dr_id</span> ຫຼື <span style="color: rgb(43, 255, 0);">dr_name</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">pr_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">dr_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">dr_name is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">dr_name</span> ມາແລ້ວຊໍ້າກັບທີ່ມີໃນຖານຂໍ້ມູນ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">dr_name already exist ! </span>) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າແກ້ໄຂຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Update data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າແກ້ໄຂຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Update data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>

## 4.3 Delete District

        ຊື່ຕໍ່ທ້າຍ = deletedistrict

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
                "dr_id":1
        }

        dr_id: number

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">dr_id</span>  ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">dr_id is emty!</span> ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າລຶບຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Delete data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າລຶບຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Delete data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>


## 4.4 District List All

        ຊື່ຕໍ່ທ້າຍ = listAlldistrict

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list All</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">is empty</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>

## 4.5 District List Page

        ຊື່ຕໍ່ທ້າຍ = listPagedistrict

*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :<br>

        {
 	        "page":1,
	        "limit":5
        }

        page: number
        limit: number

*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">page</span> ຫຼື <span style="color: rgb(43, 255, 0);">limit</span> ມາ, Server ຈະໃສ່ຄ່າພື້ນຖານແທນດັ່ງນີ້: <br>
<span style="color: rgb(252, 247, 0);">Page</span> = 1<br>
<span style="color: rgb(252, 247, 0);">Limit</span> = 10 <br><br><br>

## 4.6 Get District

        ຊື່ຕໍ່ທ້າຍ = listPagedis_by
    # ເປັນການຄົ້ນຫາຕາມ pr_name , pr_name_en , dr_name ຫຼື dr_name_en ກໍໄດ້
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
            "page":1,
            "limit":5,
            "dr_name":"ນະຄອນຫຼວງວຽງຈັນ",
            "dr_name_en":"ນະຄອນຫຼວງວຽງຈັນ",
            "pr_name":"ນະຄອນຫຼວງວຽງຈັນ",
            "pr_name_en":"ນະຄອນຫຼວງວຽງຈັນ"

        }
        Page = number
        Limit = number
        dr_name: string
        dr_name_en: string
        pr_name: string
        pr_name_en: string

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list Page</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">data list Page</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>

## 4.7 Get AutoID District

        ຊື່ຕໍ່ທ້າຍ =  getAutoIDdistrict

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">get id success</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">is empty</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>

## 4.8 List All By DistrictID

        ຊື່ຕໍ່ທ້າຍ = listAllSbydid
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
                "dr_id":1
        }

        dr_id: number

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>


## 4.9 Get District By ProvinceID 

        ຊື່ຕໍ່ທ້າຍ = getDistrict_by_provinceID
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
                "pr_id":1
        }

        pr_id: number


*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>

# 5. Village
	API	=      location.protocol//location.host/api/ ຊື່ຕໍ່ທ້າຍ
## 5.1 Create Village

        ຊື່ຕໍ່ທ້າຍ = addvillage

    ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
            "vill_id":"1",
            "vill_name":"ໜອງດາ",
            "vill_name_en":""
            "dr_id":"2",
        }

                 ໄອດີເມືອງ: dr_id: number
                  ໄອດີບ້ານ: vill_id: number
                    ຊື່ບ້ານ: vill_name: string
         ຊື່ບ້ານ(ພາສາອັງກິດ): vill_name_en: string

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">dr_id</span> ຫຼື  <span style="color: rgb(43, 255, 0);">vill_id</span> ຫຼື <span style="color: rgb(43, 255, 0);">vill_name</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">dr_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">vill_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">vill_name is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">vill_name</span> ມາແລ້ວຊໍ້າກັບທີ່ມີໃນຖານຂໍ້ມູນ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">vill_name already exist ! </span>) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າເພີ່ມຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Add data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າເພີ່ມຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Add data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>

## 5.2 Update Village

        ຊື່ຕໍ່ທ້າຍ = updatevillage

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
            "vill_id":"1",
            "vill_name":"ໜອງດາ",
            "vill_name_en":"nongda"
            "dr_id":"2",
        }

        dr_id: number
        vill_id: number
        vill_name: string
        vill_name_en: string

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">dr_id</span> ຫຼື  <span style="color: rgb(43, 255, 0);">vill_id</span> ຫຼື <span style="color: rgb(43, 255, 0);">vill_name</span> ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">dr_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">vill_id is emty!</span> ຫຼື <span style="color: rgb(252, 247, 0);">vill_name is emty!</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">vill_name</span> ມາແລ້ວຊໍ້າກັບທີ່ມີໃນຖານຂໍ້ມູນ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">vill_name already exist ! </span>) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າແກ້ໄຂຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Update data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າແກ້ໄຂຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Update data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>

## 5.3 Delete Village

        ຊື່ຕໍ່ທ້າຍ = deletevillage

    # ໃນການເຂົ້າ API ໂຕນີ້, ຜູ້ໃຊ້ຕ້ອງໄດ້ຮັບ TOKEN ຈາກທາງ Server ກ່ອນ
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
                "vill_id":1
        }

        vill_id: number

*	ຖ້າບໍ່ມີ <span style="color: rgb(43, 255, 0);">TOKEN</span>, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">You have no token !</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">vill_id</span>  ມາ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ: <br>
( <span style="color: rgb(252, 247, 0);">vill_id is emty!</span> ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br>
*	ຖ້າລຶບຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Delete data successfully</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span> <br><br>
*	ຖ້າລຶບຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">Delete data failed</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span> <br><br><br>

## 5.4 Village List All

        ຊື່ຕໍ່ທ້າຍ = listAllvillage

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list All</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">is empty</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>  

## 5.5 Village List Page

        ຊື່ຕໍ່ທ້າຍ = listPagevillage

*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :<br>

        {
 	        "page":1,
	        "limit":5
        }

        page: number
        limit: number

*	ຖ້າຜູ້ໃຊ້ບໍ່ສົ່ງຄ່າຂອງ <span style="color: rgb(43, 255, 0);">page</span> ຫຼື <span style="color: rgb(43, 255, 0);">limit</span> ມາ, Server ຈະໃສ່ຄ່າພື້ນຖານແທນດັ່ງນີ້: <br>
<span style="color: rgb(252, 247, 0);">Page</span> = 1<br>
<span style="color: rgb(252, 247, 0);">Limit</span> = 10 <br><br><br>

## 5.6 Get Village

        ຊື່ຕໍ່ທ້າຍ = listPagevill_by

    # ເປັນການຄົ້ນຫາຕາມ dr_name , dr_name_en , vill_name ຫຼື vill_name_en ກໍໄດ້
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
            "page":1,
            "limit":5,
            "dr_name":"ສີໂຄດຕະບອງ",
            "dr_name_en":"ສີໂຄດຕະບອງ",
            "vill_name":"ສີໂຄດຕະບອງ",
            "vill_name_en":"ສີໂຄດຕະບອງ"

        }
        Page = number
        Limit = number
        dr_name: string
        dr_name_en: string
        vill_name: string
        vill_name_en: string

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list Page</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">data list Page</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>

## 5.7 Get AutoID Village

        ຊື່ຕໍ່ທ້າຍ =  getAutoIDvillage

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">get id success</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">is empty </span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>

## 5.8 List All By VillageID

        ຊື່ຕໍ່ທ້າຍ = listAllSbyvid
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
                "vill_id":1
        }

        vill_id: number


*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>

## 5.9 Get Village By DistrictID

        ຊື່ຕໍ່ທ້າຍ = getVillage_by_districtID
*	ສົ່ງຂໍ້ມູນຜ່ານ API ໃນຮູບແບບ Json ດັ່ງນີ້ :

        {
                "dr_id":1
        }

        dr_id: number

*	ຖ້າດຶງຂໍ້ມູນສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">1</span><br><br>
*	ຖ້າດຶງຂໍ້ມູນບໍ່ສຳເລັດ, ຈະມີຂໍ້ຄວາມຕອບກັບວ່າ:<br>
      ( <span style="color: rgb(252, 247, 0);">data list One</span> ) ແລະ Status = <span style="color: rgb(252, 247, 0);">0</span><br><br><br>