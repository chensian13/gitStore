package springboot.example.domain;

import java.util.Date;

public class FicUser {
    private String uid;

    private String username;

    private String truename;

    private String sex;

    private String password;

    private String tel;

    private Date birth;

    private String qq;

    private String email;

    private Integer good;

    private Integer rant;

    private String head;

    private String isvip;

    private String info;

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid == null ? null : uid.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getTruename() {
        return truename;
    }

    public void setTruename(String truename) {
        this.truename = truename == null ? null : truename.trim();
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel == null ? null : tel.trim();
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq == null ? null : qq.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public Integer getGood() {
        return good;
    }

    public void setGood(Integer good) {
        this.good = good;
    }

    public Integer getRant() {
        return rant;
    }

    public void setRant(Integer rant) {
        this.rant = rant;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head == null ? null : head.trim();
    }

    public String getIsvip() {
        return isvip;
    }

    public void setIsvip(String isvip) {
        this.isvip = isvip == null ? null : isvip.trim();
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info == null ? null : info.trim();
    }

    @Override
    public String toString() {
        return "FicUser{" +
                "uid='" + uid + '\'' +
                ", username='" + username + '\'' +
                ", truename='" + truename + '\'' +
                ", sex='" + sex + '\'' +
                ", password='" + password + '\'' +
                ", tel='" + tel + '\'' +
                ", birth=" + birth +
                ", qq='" + qq + '\'' +
                ", email='" + email + '\'' +
                ", good=" + good +
                ", rant=" + rant +
                ", head='" + head + '\'' +
                ", isvip='" + isvip + '\'' +
                ", info='" + info + '\'' +
                '}';
    }
}
