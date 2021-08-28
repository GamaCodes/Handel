import React from "react";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper jzih1dpqqrg-editor_css" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo jzjgnya1gmn-editor_css",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-J8NSLj9rbsAAAAAAAAAAABkARQnAQ",
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item1",
        className: "header3-item",
        children: {
          href: "#acerca",
          children: [{ children: <p>Acerca de</p>, name: "text" }],
        },
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: "#servicios",
          children: [{ children: <p>Servicios</p>, name: "text" }],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner50DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      { name: "title", children: "H A N D E L", className: "banner5-title" },
      {
        name: "explain",
        className: "banner5-explain",
        children: "Comerciantes",
      },
      {
        name: "content",
        className: "banner5-content",
        children: "Mercantiles de abasto",
      },
      {
        name: "button",
        className: "banner5-button-wrapper",
        children: {
          href: "#acerca",
          className: "banner5-button",
          type: "primary",
          children: "Conócenos ",
        },
      },
    ],
  },
  image: {
    className: "banner5-image",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ",
  },
};
export const Feature60DataSource = {
  wrapper: { className: "home-page-wrapper feature6-wrapper" },
  OverPack: { className: "home-page feature6", playScale: 0.3 },
  Carousel: {
    className: "feature6-content",
    dots: false,
    wrapper: { className: "feature6-content-wrapper" },
    titleWrapper: {
      className: "feature6-title-wrapper",
      barWrapper: {
        className: "feature6-title-bar-wrapper",
        children: { className: "feature6-title-bar" },
      },
      title: { className: "feature6-title" },
    },
    children: [
      {
        title: { className: "feature6-title-text", children: "服务指标" },
        className: "feature6-item",
        name: "block0",
        children: [
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child0",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "万" },
              toText: true,
              children: "116",
            },
            children: { className: "feature6-text", children: "模型数据" },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child1",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "亿" },
              toText: true,
              children: "1.17",
            },
            children: { className: "feature6-text", children: "模型迭代数量" },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child2",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "亿" },
              toText: true,
              children: "2.10",
            },
            children: { className: "feature6-text", children: "训练样本数量" },
          },
        ],
      },
      {
        title: { className: "feature6-title-text", children: "服务指标" },
        className: "feature6-item",
        name: "block1",
        children: [
          {
            md: 8,
            xs: 24,
            name: "child0",
            className: "feature6-number-wrapper",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "万" },
              toText: true,
              children: "116",
            },
            children: { className: "feature6-text", children: "模型数据" },
          },
          {
            md: 8,
            xs: 24,
            name: "child1",
            className: "feature6-number-wrapper",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "亿" },
              toText: true,
              children: "1.17",
            },
            children: { className: "feature6-text", children: "模型迭代数量" },
          },
          {
            md: 8,
            xs: 24,
            name: "child2",
            className: "feature6-number-wrapper",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "亿" },
              toText: true,
              children: "2.10",
            },
            children: { className: "feature6-text", children: "训练样本数量" },
          },
        ],
      },
    ],
  },
};
export const Feature70DataSource = {
  wrapper: { className: "home-page-wrapper feature7-wrapper" },
  page: { className: "home-page feature7" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "feature7-title-wrapper",
    children: [
      {
        name: "title",
        className: "feature7-title-h1",
        children: "Servicios",
      },
      {
        name: "content",
        className: "feature7-title-content",
        children:
          "Contamos con 7 lineas de productos para proveer todas las necesidades de su empresa",
      },
    ],
  },
  blockWrapper: {
    className: "feature7-block-wrapper",
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: "block0",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children: "https://img.icons8.com/metro/26/000000/product.png",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "Jarciería",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block1",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children: "https://img.icons8.com/metro/26/000000/product.png",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "Castor",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block2",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children: "https://img.icons8.com/metro/26/000000/product.png",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "Abarrotes",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block3",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children: "https://img.icons8.com/metro/26/000000/product.png",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "Cafetería",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block4",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children: "https://img.icons8.com/metro/26/000000/product.png",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "Papel",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block5",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children: "https://img.icons8.com/metro/26/000000/product.png",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "Equipamiento",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block6",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children: "https://img.icons8.com/metro/26/000000/product.png",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "Químicos de Limpieza",
            },
          ],
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "feature7-title-wrapper",
    children: [
      {
        name: "title",
        className: "feature6-title-h1",
        children: "Algunos Productos",
      },
    ],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "jzjn8afnsxb-editor_css content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item jzjgrrupf2c-editor_css",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjgrlz134-editor_css",
              children:
                "https://image.jimcdn.com/app/cms/image/transf/dimension=277x10000:format=jpg/path/sad14a49346b401cd/image/i6beb7a1a70ee9d1a/version/1511819585/image.jpg",
            },
            {
              name: "title",
              className: "content0-block-title jzj8xt5kgv7-editor_css",
              children: "Papel",
            },
            {
              name: "content",
              children: "Toalla interdoblada",
              className: "jzj8z9sya9-editor_css",
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjncn210ql-editor_css",
              children:
                "https://image.jimcdn.com/app/cms/image/transf/dimension=277x10000:format=jpg/path/sad14a49346b401cd/image/i89a0241348339d64/version/1456195187/image.jpg",
            },
            {
              name: "title",
              className: "content0-block-title jzjne54fwqm-editor_css",
              children: "Abarrotes",
            },
            {
              name: "content",
              children: "Papel Higienico",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjndq0dueg-editor_css",
              children:
                "https://image.jimcdn.com/app/cms/image/transf/dimension=398x10000:format=jpg/path/sad14a49346b401cd/image/i51a568c922d61320/version/1527110741/mechudos-trapeadores-armazones-y-mops.jpg",
            },
            {
              name: "title",
              className: "content0-block-title jzjne24af8c-editor_css",
              children: "Castor",
            },
            {
              name: "content",
              children: "Mechudos",
            },
          ],
        },
      },
      {
        name: "block3",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjndsyw8sf-editor_css",
              children:
                "https://www.idone.com.mx/images/stories/virtuemart/product/jarcieria-1.jpg",
            },
            {
              name: "title",
              className: "content0-block-title jzjndw5oerk-editor_css",
              children: "Jarciería",
            },
            {
              name: "content",
              children: "Esponjas",
            },
          ],
        },
      },
      {
        name: "block4",
        className: "jzjn8afnsxb-editor_css content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item jzjgrrupf2c-editor_css",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjgrlz134-editor_css",
              children:
                "https://image.jimcdn.com/app/cms/image/transf/dimension=398x10000:format=jpg/path/sad14a49346b401cd/image/i449b78d12986234a/version/1527110618/jarcier%C3%ADa-wonderfultools.jpg",
            },
            {
              name: "title",
              className: "content0-block-title jzj8xt5kgv7-editor_css",
              children: "Jarciería",
            },
            {
              name: "content",
              children: "Diversos",
              className: "jzj8z9sya9-editor_css",
            },
          ],
        },
      },
      {
        name: "block5",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjncn210ql-editor_css",
              children:
                "https://m.media-amazon.com/images/I/71XHR4+vfrL._AC_UL320_.jpg",
            },
            {
              name: "title",
              className: "content0-block-title jzjne54fwqm-editor_css",
              children: "Cafetería",
            },
            {
              name: "content",
              children: "Desechables",
            },
          ],
        },
      },
      {
        name: "block6",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjndq0dueg-editor_css",
              children:
                "https://image.jimcdn.com/app/cms/image/transf/dimension=456x10000:format=jpg/path/sad14a49346b401cd/image/id7719e9de4023fd6/version/1527110561/qu%C3%ADmico-a-granel-para-cualquier-necesidad-y-envases.jpg",
            },
            {
              name: "title",
              className: "content0-block-title jzjne24af8c-editor_css",
              children: "Químicos",
            },
            {
              name: "content",
              children: "Químicos a granel ",
            },
          ],
        },
      },
      {
        name: "block7",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjndsyw8sf-editor_css",
              children:
                "https://image.jimcdn.com/app/cms/image/transf/dimension=350x10000:format=jpg/path/sad14a49346b401cd/image/i580a7b225bfb36c3/version/1574898977/despachador-despachador-de-toalla-interdoblada-z-ah36000-color-blanco-con-aplique-en-azul-dimensiones-en-mil%C3%ADmetros-alto-350-largo-270-ancho-135-capacidad-600-toallas-contenido-por-caja-1-pieza.jpg",
            },
            {
              name: "title",
              className: "content0-block-title jzjndw5oerk-editor_css",
              children: "Equipamento",
            },
            {
              name: "content",
              children: "Toallero",
            },
          ],
        },
      },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: "home-page-wrapper feature8-wrapper" },
  page: { className: "home-page feature8" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "feature8-title-wrapper",
    children: [
      { name: "title", className: "feature8-title-h1", children: "使用流程" },
      {
        name: "content",
        className: "feature8-title-content",
        children: "流程简单清晰，快速响应需求",
      },
    ],
  },
  childWrapper: {
    className: "feature8-button-wrapper",
    children: [
      {
        name: "button",
        className: "feature8-button",
        children: { href: "#", children: "立即体验" },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: "feature8-carousel",
    wrapper: { className: "feature8-block-wrapper" },
    children: {
      className: "feature8-block",
      titleWrapper: {
        className: "feature8-carousel-title-wrapper",
        title: { className: "feature8-carousel-title" },
      },
      children: [
        {
          name: "block0",
          className: "feature8-block-row",
          gutter: 120,
          title: {
            className: "feature8-carousel-title-block",
            children: "平台自主训练流程",
          },
          children: [
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child0",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children: "沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child1",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child2",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child3",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
          ],
        },
        {
          name: "block1",
          className: "feature8-block-row",
          gutter: 120,
          title: {
            children: "平台自主训练流程",
            className: "feature8-carousel-title-block",
          },
          children: [
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child0",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children: "沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child1",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child2",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child3",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 8,
        className: "block",
        title: {
          className: "logo jzl0qcpyjra-editor_css",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*GzZ-QqkpH4AAAAAAAAAAAABkARQnAQ",
        },
        childWrapper: {
          className: "slogan",
          children: [
            { name: "content0", children: <p>蚂蚁金服计算机视觉平台</p> },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 8,
        className: "block",
        title: { children: <p>联系我们</p> },
        childWrapper: {
          children: [
            {
              name: "image~jzl0tcm4f1d",
              className: "",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*NoENTI5uyn4AAAAAAAAAAABkARQnAQ",
            },
            {
              href: "#",
              name: "link0",
              children: <p>图鹰对接答疑钉钉群</p>,
              className: "jzl0u1bko6-editor_css",
            },
            { href: "#", name: "link1", children: "联系我们" },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 8,
        className: "block",
        title: { children: "资源" },
        childWrapper: {
          children: [
            { href: "#", name: "link0", children: "Ant Design" },
            { href: "#", name: "link1", children: "Ant Motion" },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <span>
        &nbsp; &nbsp; &nbsp;&nbsp;H A N D E L&nbsp; &nbsp; &nbsp;&nbsp;
        <a href="#acerca">Acerca</a>&nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp;{" "}
        <a href="#servicios">Servicios</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; © 2021
        <br />
      </span>
    ),
  },
};
