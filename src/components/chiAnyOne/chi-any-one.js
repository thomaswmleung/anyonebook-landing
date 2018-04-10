import Vue from 'vue';
import template from './chi-any-one.html';

let defaultGrade = {
  chinese_mock100_progressive: 'p6',
  chinese_mock100_at: 'p6',
  chinese_anyone: 'p6'
};

let BaseComponent = Vue.extend({
  data: ()=>{
    return {
      
    };
  },
  template,
});

export default BaseComponent.extend({
  methods: {
    onGradeChange: ($evt, codex)=>{
      this.grade = this.grade || {};
      this.grade[codex] = $evt.target.value;
    },
    gotoBookToc: ($evt, codex)=>{
      console.log(
        codex,
        $evt,
        this.grade ? this.grade[codex] : defaultGrade[codex]
      );
      let _grade = this.grade ? this.grade[codex] : defaultGrade[codex];
      //Open new windows with specify codex and grade
      window.open(
        `toc.html?codex=${codex}&grade=${_grade}`,
        '_blank'
      );
      //
    }
  },
});
